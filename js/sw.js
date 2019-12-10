const CACHE_NAME = "pwebmovie";
var urlsToCache = [
      "/",
      "/js/tmdb.js",
      "/js/materialize.min.js",
      "/js/init.js",
      "/js/api.js",
      "/css/materialize.min.css",
      "/img/movie_1080.jpg",
      "/img/movie_720.jpg",
      "/img/movie_480.jpg",
      "/css/style.css"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
