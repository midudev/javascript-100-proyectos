// Web Worker: calcula el fractal fuera del hilo principal.
// Así, aunque haya millones de píxeles y miles de iteraciones, la interfaz
// sigue respondiendo (puedes arrastrar, hacer zoom o mover sliders).

// Si |z|² supera este valor, el punto "escapa" al infinito. Usar un radio
// grande (256) en lugar de 2 hace que el coloreado suave no tenga bandas
const BAILOUT = 256 * 256
const LUT_SIZE = 1024
// Cuántas iteraciones ocupa un ciclo completo de la paleta
const COLOR_PERIOD = 36

// Paletas definidas como paradas [posición (0-1), r, g, b].
// Empiezan y acaban igual para poder recorrerlas en bucle sin saltos
const PALETTES = {
  fuego: [[0, 0, 0, 0], [0.2, 110, 8, 0], [0.45, 240, 90, 0], [0.62, 255, 225, 120], [0.8, 200, 40, 10], [1, 0, 0, 0]],
  clasica: [[0, 0, 7, 100], [0.16, 32, 107, 203], [0.42, 237, 255, 255], [0.64, 255, 170, 0], [0.86, 0, 2, 0], [1, 0, 7, 100]],
  neon: [[0, 12, 0, 32], [0.3, 255, 0, 170], [0.5, 0, 235, 255], [0.72, 120, 0, 255], [1, 12, 0, 32]],
  hielo: [[0, 0, 4, 18], [0.35, 30, 110, 250], [0.55, 225, 245, 255], [0.8, 50, 80, 190], [1, 0, 4, 18]],
  grises: [[0, 0, 0, 0], [0.5, 255, 255, 255], [1, 0, 0, 0]]
}

const lookupTables = {}
let currentJob = null

// Precalculamos la paleta en una tabla (LUT) para no interpolar colores
// en cada píxel: luego solo hay que leer una posición del array
function getLookupTable(name) {
  if (lookupTables[name]) return lookupTables[name]

  const stops = PALETTES[name] ?? PALETTES.fuego
  const table = new Uint8Array(LUT_SIZE * 3)

  for (let i = 0; i < LUT_SIZE; i++) {
    const t = i / LUT_SIZE
    const nextIndex = stops.findIndex(([position]) => position >= t)
    const end = stops[Math.max(nextIndex, 1)]
    const start = stops[Math.max(nextIndex, 1) - 1]
    const local = (t - start[0]) / (end[0] - start[0] || 1)

    for (let channel = 1; channel <= 3; channel++) {
      table[i * 3 + channel - 1] = start[channel] + (end[channel] - start[channel]) * local
    }
  }

  lookupTables[name] = table
  return table
}

// Devuelve la iteración "suavizada" en la que escapa el punto c = cr + ci·i
// o -1 si pertenece al conjunto de Mandelbrot
function escapeTime(cr, ci, maxIterations) {
  // Atajos: los puntos dentro del cardioide principal y del bulbo de
  // periodo 2 nunca escapan. Detectarlo con una fórmula evita hacer
  // maxIterations vueltas en la zona negra, que es la más costosa
  const xq = cr - 0.25
  const q = xq * xq + ci * ci
  if (q * (q + xq) <= 0.25 * ci * ci) return -1
  if ((cr + 1) * (cr + 1) + ci * ci <= 0.0625) return -1

  // Iteramos z(n+1) = z(n)² + c empezando en z = 0.
  // Con números complejos (a + bi)² = (a² - b²) + (2ab)i, así que
  // separamos la parte real (zr) y la imaginaria (zi)
  let zr = 0
  let zi = 0
  let zr2 = 0
  let zi2 = 0
  let n = 0

  while (zr2 + zi2 <= BAILOUT && n < maxIterations) {
    zi = 2 * zr * zi + ci
    zr = zr2 - zi2 + cr
    zr2 = zr * zr
    zi2 = zi * zi
    n++
  }

  if (n >= maxIterations) return -1

  // Coloreado suave (smooth coloring): en lugar de usar el número entero de
  // iteraciones (que produce bandas de color), estimamos "cuánto" le faltaba
  // al punto para escapar usando el logaritmo de |z|
  const logZn = Math.log(zr2 + zi2) / 2
  const nu = Math.log(logZn / Math.LN2) / Math.LN2
  return Math.max(0, n + 1 - nu)
}

function computeBand(job, startY, rows) {
  const { width, height, centerX, centerY, scale, maxIterations, palette } = job
  const table = getLookupTable(palette)
  const pixels = new Uint8ClampedArray(width * rows * 4)
  let index = 0

  for (let py = startY; py < startY + rows; py++) {
    // El eje imaginario crece hacia arriba y el canvas hacia abajo: restamos
    const ci = centerY - (py - height / 2) * scale

    for (let px = 0; px < width; px++) {
      const cr = centerX + (px - width / 2) * scale
      const mu = escapeTime(cr, ci, maxIterations)

      if (mu >= 0) {
        const t = (mu / COLOR_PERIOD) % 1
        const color = Math.floor(t * LUT_SIZE) * 3
        pixels[index] = table[color]
        pixels[index + 1] = table[color + 1]
        pixels[index + 2] = table[color + 2]
      }
      // Los puntos del conjunto se quedan en negro (0, 0, 0)
      pixels[index + 3] = 255
      index += 4
    }
  }

  return pixels
}

// Procesamos una franja y cedemos el control con setTimeout. Si llega un
// mensaje con un trabajo nuevo (el usuario ha hecho zoom), se atiende entre
// franjas y el trabajo viejo se abandona sin terminar de calcularlo
function processNextBand(job) {
  if (job !== currentJob || job.nextBand >= job.bandCount) return

  const band = job.nextBand
  job.nextBand += job.bandStep

  const startY = band * job.bandHeight
  const rows = Math.min(job.bandHeight, job.height - startY)
  const pixels = computeBand(job, startY, rows)

  // Transferimos el buffer en lugar de copiarlo: es instantáneo
  self.postMessage({ jobId: job.jobId, startY, rows, buffer: pixels.buffer }, [pixels.buffer])

  setTimeout(() => processNextBand(job), 0)
}

self.addEventListener('message', ({ data }) => {
  if (data.type === 'render') {
    currentJob = { ...data, nextBand: data.bandStart }
    processNextBand(currentJob)
  }
})
