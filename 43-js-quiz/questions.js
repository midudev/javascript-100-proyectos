// Este archivo es un módulo ES: todo lo que declaramos aquí es PRIVADO
// salvo lo que exportamos con "export". Desde index.html lo importamos con:
//   import { QUESTIONS } from './questions.js'
//
// Cada pregunta tiene:
//  - question: el enunciado (el texto entre `comillas invertidas` se muestra como código)
//  - code: un fragmento de código opcional
//  - options: las posibles respuestas
//  - answer: el índice de la respuesta correcta dentro de options
//  - explanation: por qué es la respuesta correcta

export const QUESTIONS = [
  {
    question: '¿Qué devuelve `typeof null`?',
    options: ['"null"', '"object"', '"undefined"', '"number"'],
    answer: 1,
    explanation: 'Es un error histórico de la primera versión de JavaScript que nunca se corrigió para no romper la web. Para comprobar null usa `value === null`.'
  },
  {
    question: '¿Qué se muestra por consola?',
    code: 'console.log(0.1 + 0.2 === 0.3)',
    options: ['true', 'false', 'TypeError', 'undefined'],
    answer: 1,
    explanation: 'Los números usan coma flotante (IEEE 754) y 0.1 + 0.2 da 0.30000000000000004. Para comparar decimales usa una tolerancia: `Math.abs(a - b) < Number.EPSILON`.'
  },
  {
    question: '¿Qué muestra este código?',
    code: 'console.log(x)\nvar x = 5',
    options: ['5', 'undefined', 'ReferenceError', 'null'],
    answer: 1,
    explanation: 'Las declaraciones con `var` se "elevan" (hoisting) al inicio de la función, pero su valor no: en ese punto x existe y vale undefined.'
  },
  {
    question: '¿Y si usamos `let`?',
    code: 'console.log(y)\nlet y = 5',
    options: ['5', 'undefined', 'ReferenceError', 'null'],
    answer: 2,
    explanation: '`let` y `const` también se elevan, pero están en la "zona muerta temporal" (TDZ) hasta su declaración. Acceder antes lanza un ReferenceError.'
  },
  {
    question: '¿Qué imprime este bucle?',
    code: 'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i))\n}',
    options: ['0 1 2', '3 3 3', '0 0 0', '2 2 2'],
    answer: 1,
    explanation: 'Con `var` solo existe UNA variable i compartida. Cuando se ejecutan los setTimeout el bucle ya terminó e i vale 3. Con `let` cada vuelta tiene su propia i y saldría 0 1 2.'
  },
  {
    question: '¿En qué orden aparecen las letras?',
    code: "console.log('A')\nsetTimeout(() => console.log('B'), 0)\nPromise.resolve().then(() => console.log('C'))\nconsole.log('D')",
    options: ['A B C D', 'A D B C', 'A D C B', 'A C D B'],
    answer: 2,
    explanation: 'Primero el código síncrono (A, D). Después el event loop vacía la cola de MICROtareas (promesas: C) antes de pasar a las MACROtareas (setTimeout: B).'
  },
  {
    question: '¿Qué devuelve esta expresión?',
    code: '[1, 2, 3].map(parseInt)',
    options: ['[1, 2, 3]', '[1, NaN, NaN]', '[NaN, NaN, NaN]', '[1, 2, NaN]'],
    answer: 1,
    explanation: 'map llama a parseInt(valor, índice). parseInt("2", 1) y parseInt("3", 2) usan bases inválidas o dígitos imposibles, así que dan NaN. Usa `.map(Number)`.'
  },
  {
    question: '¿Qué se muestra?',
    code: "const a = {}\nconst b = { key: 'b' }\nconst c = { key: 'c' }\na[b] = 123\na[c] = 456\nconsole.log(a[b])",
    options: ['123', '456', 'undefined', 'TypeError'],
    answer: 1,
    explanation: 'Las claves de un objeto se convierten a string. Tanto b como c se convierten en "[object Object]", así que la segunda asignación sobrescribe la primera. Para usar objetos como clave existe `Map`.'
  },
  {
    question: '¿Qué imprime?',
    code: "console.log('5' + 2, '5' - 2)",
    options: ['7 3', '"52" 3', '"52" "3"', '7 "3"'],
    answer: 1,
    explanation: 'El operador + con un string concatena ("52"). El operador - solo funciona con números, así que convierte "5" a número y resta (3).'
  },
  {
    question: '¿Qué ocurre con `this` en una arrow function?',
    options: [
      'Apunta siempre a window',
      'Es el objeto que llama a la función',
      'No tiene this propio: usa el del ámbito donde se definió',
      'No se puede usar this dentro'
    ],
    answer: 2,
    explanation: 'Las arrow functions capturan el `this` léxico del contexto que las rodea. Por eso no conviene usarlas como métodos de objeto, pero son perfectas para callbacks.'
  },
  {
    question: '¿Qué muestra este código?',
    code: "const user = { name: 'Ana' }\nuser.name = 'Luis'\nconsole.log(user.name)",
    options: ["'Ana'", "'Luis'", 'TypeError', 'undefined'],
    answer: 1,
    explanation: '`const` impide REASIGNAR la variable, no MODIFICAR el objeto al que apunta. Si quieres un objeto inmutable usa `Object.freeze(user)`.'
  },
  {
    question: '¿Qué imprime?',
    code: "console.log(0 == '', 0 === '')",
    options: ['true true', 'false false', 'true false', 'false true'],
    answer: 2,
    explanation: '`==` convierte los tipos antes de comparar ("" pasa a ser 0). `===` compara también el tipo, así que number y string nunca son iguales.'
  },
  {
    question: '¿Cuánto vale a.info.age al final?',
    code: 'const a = { info: { age: 20 } }\nconst b = { ...a }\nb.info.age = 30\nconsole.log(a.info.age)',
    options: ['20', '30', 'undefined', 'TypeError'],
    answer: 1,
    explanation: 'El spread hace una copia SUPERFICIAL: b.info y a.info son el mismo objeto. Para una copia profunda usa `structuredClone(a)`.'
  },
  {
    question: '¿Qué devuelve?',
    code: '[10, 1, 3, 2].sort()',
    options: ['[1, 2, 3, 10]', '[10, 3, 2, 1]', '[1, 10, 2, 3]', '[10, 1, 3, 2]'],
    answer: 2,
    explanation: 'Sin función de comparación, sort convierte los elementos a string y los ordena alfabéticamente ("10" va antes que "2"). Usa `.sort((a, b) => a - b)`.'
  },
  {
    question: '¿Qué imprime?',
    code: 'const config = { retries: 0 }\nconsole.log(config.retries || 3, config.retries ?? 3)',
    options: ['0 0', '3 3', '3 0', '0 3'],
    answer: 2,
    explanation: '`||` descarta cualquier valor falsy (y 0 lo es). `??` (nullish coalescing) solo usa el valor por defecto si el valor es null o undefined.'
  },
  {
    question: '¿Qué muestra la consola?',
    code: 'async function getNumber() {\n  return 42\n}\nconsole.log(getNumber())',
    options: ['42', 'undefined', 'Una Promise', 'Error'],
    answer: 2,
    explanation: 'Una función async SIEMPRE devuelve una promesa. Para obtener el 42 hay que usar `await getNumber()` o `.then()`.'
  },
  {
    question: '¿Qué imprime?',
    code: 'const { a = 10, b = 20 } = { a: undefined, b: null }\nconsole.log(a, b)',
    options: ['10 20', 'undefined null', '10 null', 'undefined 20'],
    answer: 2,
    explanation: 'Los valores por defecto de la desestructuración solo se aplican cuando el valor es `undefined`. null es un valor válido y se respeta.'
  },
  {
    question: '¿Qué devuelve?',
    code: 'Array.from({ length: 3 }, (_, i) => i * 2)',
    options: ['[0, 2, 4]', '[2, 4, 6]', '[undefined, undefined, undefined]', '[0, 1, 2]'],
    answer: 0,
    explanation: 'Array.from acepta cualquier objeto con length y una función de mapeo que recibe (valor, índice). Es una forma práctica de crear rangos.'
  },
  {
    question: '¿Qué imprime?',
    code: 'function createCounter() {\n  let count = 0\n  return () => ++count\n}\nconst counter = createCounter()\ncounter()\ncounter()\nconsole.log(counter())',
    options: ['1', '2', '3', '0'],
    answer: 2,
    explanation: 'Es un closure: la función devuelta "recuerda" la variable count de su ámbito aunque createCounter ya haya terminado. Cada llamada la incrementa.'
  },
  {
    question: '¿Qué devuelve `typeof NaN`?',
    options: ['"NaN"', '"undefined"', '"number"', '"object"'],
    answer: 2,
    explanation: 'NaN ("Not a Number") es, irónicamente, un valor del tipo number: representa el resultado de una operación numérica inválida.'
  },
  {
    question: '¿Qué imprime?',
    code: 'console.log(NaN === NaN, Object.is(NaN, NaN))',
    options: ['true true', 'false false', 'false true', 'true false'],
    answer: 2,
    explanation: 'NaN es el único valor que no es igual a sí mismo con ===. Para detectarlo usa `Number.isNaN(x)` u `Object.is`.'
  },
  {
    question: 'Si dos archivos importan el mismo módulo ES, ¿qué ocurre?',
    code: "// a.js y b.js\nimport { cart } from './store.js'",
    options: [
      'El módulo se ejecuta dos veces',
      'Se evalúa una sola vez y ambos comparten la misma instancia',
      'El segundo import lanza un error',
      'Cada archivo recibe una copia del objeto'
    ],
    answer: 1,
    explanation: 'Los módulos ES se evalúan una única vez y se cachean. Todos los que los importan reciben las mismas referencias ("live bindings"): si uno modifica cart, el otro lo ve.'
  },
  {
    question: '¿Qué devuelve `Math.max()` sin argumentos?',
    options: ['0', 'undefined', '-Infinity', 'NaN'],
    answer: 2,
    explanation: 'Math.max empieza comparando desde -Infinity (el "elemento neutro" del máximo), así que sin argumentos devuelve -Infinity. Math.min() devuelve Infinity.'
  },
  {
    question: '¿Qué imprime?',
    code: 'const arr = [1, 2, 3]\narr.length = 0\nconsole.log(arr[0])',
    options: ['1', 'undefined', 'null', 'TypeError'],
    answer: 1,
    explanation: 'La propiedad length de un array se puede escribir: ponerla a 0 elimina todos los elementos. Es una forma rápida de vaciar un array declarado con const.'
  }
]
