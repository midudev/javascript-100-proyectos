// Mini sistema reactivo inspirado en Vue 3 y los signals.
// Estructura de dependencias:
//   WeakMap(objeto) -> Map(propiedad) -> Set(efectos que la leen)
const targetMap = new WeakMap()
const proxyCache = new WeakMap()
const effectStack = []
let activeEffect = null

// Ganchos opcionales para depurar, como unas mini devtools
export const hooks = { onSet: null }

// Se llama al LEER una propiedad: apuntamos qué efecto la está usando
function track(target, key) {
  if (!activeEffect) return
  let depsMap = targetMap.get(target)
  if (!depsMap) targetMap.set(target, (depsMap = new Map()))
  let dep = depsMap.get(key)
  if (!dep) depsMap.set(key, (dep = new Set()))
  dep.add(activeEffect)
  activeEffect.deps.add(dep)
}

// Se llama al ESCRIBIR una propiedad: volvemos a ejecutar sus efectos
function trigger(target, key) {
  const dep = targetMap.get(target)?.get(key)
  if (!dep) return
  // Copiamos el Set porque al ejecutarse los efectos se vuelven a suscribir
  for (const effect of [...dep]) {
    if (effect === activeEffect) continue // un efecto no se dispara a sí mismo
    if (effect.scheduler) effect.scheduler()
    else effect()
  }
}

export function reactive(target) {
  if (proxyCache.has(target)) return proxyCache.get(target)

  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      track(target, key)
      // Reflect hace la operación "normal" que el Proxy ha interceptado
      const value = Reflect.get(target, key, receiver)
      // Reactividad profunda y perezosa: los objetos anidados se envuelven al leerlos
      return typeof value === 'object' && value !== null ? reactive(value) : value
    },
    set(target, key, value, receiver) {
      const hadKey = Object.hasOwn(target, key)
      const oldValue = target[key]
      const result = Reflect.set(target, key, value, receiver)
      if (!hadKey || !Object.is(oldValue, value)) {
        hooks.onSet?.(key, value)
        trigger(target, key)
        // En un array, añadir un índice nuevo también cambia su longitud
        if (!hadKey && Array.isArray(target)) trigger(target, 'length')
      }
      return result
    },
    deleteProperty(target, key) {
      const hadKey = Object.hasOwn(target, key)
      const result = Reflect.deleteProperty(target, key)
      if (hadKey) trigger(target, key)
      return result
    }
  })

  proxyCache.set(target, proxy)
  return proxy
}

export function effect(fn, { lazy = false, scheduler = null } = {}) {
  const runner = () => {
    // Olvidamos las dependencias anteriores: esta vez puede leer otras
    runner.deps.forEach(dep => dep.delete(runner))
    runner.deps.clear()
    effectStack.push(runner)
    activeEffect = runner
    try {
      return fn()
    } finally {
      effectStack.pop()
      activeEffect = effectStack.at(-1) ?? null
    }
  }

  runner.deps = new Set()
  runner.scheduler = scheduler
  if (!lazy) runner()
  return runner
}

export function computed(getter) {
  let value
  let dirty = true

  const runner = effect(getter, {
    lazy: true,
    // Si cambia una dependencia no recalculamos todavía (evaluación perezosa):
    // marcamos el valor como "sucio" y avisamos a quien lo use
    scheduler: () => {
      if (dirty) return
      dirty = true
      trigger(signal, 'value')
    }
  })

  const signal = {
    get value() {
      if (dirty) {
        value = runner()
        dirty = false
      }
      track(signal, 'value')
      return value
    }
  }

  return signal
}
