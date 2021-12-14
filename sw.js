self.importScripts('data/favorite_movies.js');
self.importScripts('data/hot_movies.js');
self.importScripts('data/parallax_movies.js');
self.importScripts('data/popular_movies.js');
self.importScripts('data/recommend_movies.js');
self.importScripts('data/trending_movies.js');

// Files to cache
const cacheName = 'movie';
const appShellFiles = [
  '/MOVIE/movie.html',
  '/MOVIE/main.js',
  '/MOVIE/movie.css',
  '/MOVIE/css/',
  '/MOVIE/data/',
  '/MOVIE/js/',
  '/MOVIE/video',
  '/MOVIE/images'
];
const moviesImages = [];
for (let i = 0; i < movies_favorite.length; i++) {
    moviesImages.push(`${movies_favorite[i].img}`);
}
for (let i = 0; i < parallax_movies.length; i++) {
    moviesImages.push(`${parallax_movies[i].img}`);
}
for (let i = 0; i < movies_popular.length; i++) {
    moviesImages.push(`${movies_popular[i].img}`);
}
for (let i = 0; i < recommend_movies.length; i++) {
    moviesImages.push(`${recommend_movies[i].img}`);
}
for (let i = 0; i < trending_movies.length; i++) {
    moviesImages.push(`${trending_movies[i].img}`);
}

const contentToCache = appShellFiles.concat(moviesImages);

// Installing Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Caching all: app shell and content');
    await cache.addAll(contentToCache);
  })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});