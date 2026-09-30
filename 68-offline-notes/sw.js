/*
  SERVICE WORKER
  Es un script que el navegador ejecuta en segundo plano, separado de
  la página, y que actúa como un proxy entre ella y la red: puede
  interceptar cada petición (evento `fetch`) y decidir cómo responder.

  CICLO DE VIDA
  1. register(): la página pide registrar este archivo.
  2. install: se ejecuta UNA vez por versión. Aquí precargamos en la
     Cache API los archivos que la app necesita para funcionar offline.
  3. waiting: si ya había otro SW controlando pestañas abiertas, el nuevo
     espera a que se cierren todas (skipWaiting() se salta la espera).
  4. activate: el SW toma el relevo. Momento ideal para borrar cachés viejas.
  5. fetch: a partir de aquí intercepta las peticiones de las páginas
     dentro de su "scope" (esta carpeta, './').

  Si cambias este archivo aunque sea un byte, el navegador lo detecta
  como una versión nueva y repite el ciclo. Por eso versionamos la caché.
*/
const CACHE_PREFIX = 'notas-offline-'
const CACHE_NAME = `${CACHE_PREFIX}v1`

// Rutas relativas: así funciona aunque la app viva en una subcarpeta
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg'
]

self.addEventListener('install', (event) => {
  // waitUntil alarga la instalación hasta que la promesa termine:
  // si falla la descarga de algún archivo, la instalación falla entera
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  )
  // Activamos la nueva versión sin esperar a que se cierren las pestañas
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      // clients.claim() hace que el SW controle ya las páginas abiertas
      // (si no, solo lo haría a partir de la siguiente recarga)
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Solo gestionamos peticiones GET de nuestro propio origen
  if (request.method !== 'GET' || url.origin !== self.location.origin) return

  event.respondWith(cacheFirst(event))
})

/*
  Estrategia CACHE FIRST:
  1. Si el recurso está en caché, lo devolvemos al instante (sin red).
  2. Si no, vamos a la red y guardamos una copia para la próxima vez.
  Además, cuando respondemos desde caché pedimos la versión nueva en
  segundo plano para que la próxima visita tenga los cambios.
*/
async function cacheFirst(event) {
  const { request } = event
  const cache = await caches.open(CACHE_NAME)
  const cached = await cache.match(request, { ignoreSearch: true })

  const network = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone())
      return response
    })

  if (cached) {
    // Actualización en segundo plano: si falla (offline) no pasa nada
    event.waitUntil(network.then(() => {}, () => {}))
    return cached
  }

  try {
    return await network
  } catch (error) {
    // Sin red y sin caché: si es una navegación, devolvemos la app
    if (request.mode === 'navigate') {
      const fallback = await cache.match('./index.html')
      if (fallback) return fallback
    }
    return Response.error()
  }
}
