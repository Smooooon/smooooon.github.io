const cacheName = 'seilschieber-v1.0.0' //Change to update cachedata
const contentToCache = [
  //'/src/assets/images/FATZER_Stabilo_Litzenseil_Web.png',
  //'/src/assets/images/FATZER_Integra_vollverschlossen_Web.png',
  //'/src/assets/icons/arrow-down.svg'
  // "/pwa-examples/test",
  // "/pwa-examples/test",
  // "/pwa-examples/test",
  // "/pwa-examples/test",
  // "/list",
  // "/release",
  // "/pwa-examples/js13kpwa/fonts/graduate.ttf",
  // "/pwa-examples/js13kpwa/fonts/graduate.woff",
  // "/pwa-examples/js13kpwa/favicon.ico",
  // "/pwa-examples/js13kpwa/img/js13kgames.png",
  // "/pwa-examples/js13kpwa/img/bg.png",
  // "/pwa-examples/js13kpwa/icons/icon-32.png",
  // "/pwa-examples/js13kpwa/icons/icon-64.png",
  // "/pwa-examples/js13kpwa/icons/icon-96.png",
  // "/pwa-examples/js13kpwa/icons/icon-128.png",
  // "/pwa-examples/js13kpwa/icons/icon-168.png",
  // "/pwa-examples/js13kpwa/icons/icon-192.png",
  // "/pwa-examples/js13kpwa/icons/icon-256.png",
  // "/pwa-examples/js13kpwa/icons/icon-512.png",
]

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install')
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName)
      console.log('[Service Worker] Caching all: app shell and content')
      await cache.addAll(contentToCache)
    })()
  )
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key === cacheName) {
            return
          }
          return caches.delete(key) //Delete old(version) cache
        })
      )
    })
  )
})

// fetch the resource from the network
const fromNetwork = (request, timeout) =>
  new Promise((fulfill, reject) => {
    const timeoutId = setTimeout(reject, timeout)
    fetch(request).then((response) => {
      clearTimeout(timeoutId)
      fulfill(response)
      update(request)
    }, reject)
  })

// fetch the resource from the browser cache
const fromCache = (request) => {
  return caches.open(cacheName).then(
    (cache) =>
      cache.match(request).then((matching) => matching || cache.match('/') || cache.match('/')) //ToDo change logic
  )
}

// cache the current page to make it available for offline
const update = (request) => {
  return caches
    .open(cacheName)
    .then((cache) => fetch(request).then((response) => cache.put(request, response)))
}

// general strategy when making a request (eg if online try to fetch it
// from the network with a timeout, if something fails serve from cache)
self.addEventListener('fetch', (evt) => {
  evt.respondWith(fromNetwork(evt.request, 20000).catch(() => fromCache(evt.request)))
  evt.waitUntil(update(evt.request))
})
