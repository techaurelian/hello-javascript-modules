/*
 * 
 *  Hello JavaScript Modules
 *  Copyright (c) 2018-2020 techaurelian. All rights reserved. 
 *  Licensed under the MIT license.
 *  https://techaurelian.com/hello-javascript-modules
 * 
 */

const curCacheVersion = "1";
const curCacheName = `hello-javascript-modules-${curCacheVersion}`;
const urlsToCache = [
  '/',
  'index.html',
  '/styles/modern-normalize.css',
  '/styles/main.css',
  '/scripts/app.js',
  '/scripts/hello.js',
  '/scripts/classic.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(curCacheName).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== curCacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});