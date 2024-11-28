const CACHE_NAME='v1_cache_CarlosCuautemoc';

var urlsToCache=[
    './',
    './css/styles.css',
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/facebook.png',
    './img/gorjeo.png',
    './img/instagram.png',
    './img/logo.jpg',
    './img/logo1.jpg',
    './img/logo2.jpg',
    './img/logo3.jpg',
    './img/logo4.jpg',
    './img/logo5.jpg',
    './img/logo6.jpg',
    './img/logo7.jpg',
    './img/logo8.jpg',
    './img/logo9.jpg',
];

self.addEventListener('install',e =>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache =>{
        return cache.addAll(urlsToCache)
        .then(()=>{
            self.skipWaiting();
        });
    })
    .catch(err=> console.log('no se registro el cache', err))
);
});

//Evento activate
// Que la app funcione sin conexión
self.addEventListener('activate', e => {
	const cacheWhitelist =[CACHE_NAME];

	e.waitUntil(
		caches.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheName => {

						if(cacheWhitelist.indexOf(cacheName) === -1){
							// Borrar elementos que no se necesitan
							return caches.delete(cacheName);
						}

					})
				);
			})
		.then(() => {
			//Activar cache
			self.clients.claim();
		})
	);
});

//Evento fetch
self.addEventListener('fetch', e => {

	e.respondWith(
		caches.match(e.request)
		.then(res =>{
			if(res){
				return res;
			}
			return fetch(e.request);
		})
	);
});