FILES_TO_CACHE = [
    "/",
    "index.html",
    "index.js",
    "style.js"
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

//install
self.addEventListener("install",function(evt){
    evt.waitUntil(
        cache.open(CACHE_NAME).then(cache =>{
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    
    self.skipWaiting();
})