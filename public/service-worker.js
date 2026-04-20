const CACHE_NAME = "2048-dynamic-v2";

self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);

    // ❗ ignoruj ne-http(s), ale NECH je projít normálně
    if (url.protocol !== "http:" && url.protocol !== "https:") {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) return cached;

            return fetch(event.request)
                .then((response) => {
                    // uložíme jen validní response
                    if (!response || response.status !== 200 || response.type !== "basic") {
                        return response;
                    }

                    const responseClone = response.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });

                    return response;
                })
                .catch(() => {
                    // fallback jen pro HTML
                    if (event.request.destination === "document") {
                        return caches.match("/");
                    }
                });
        })
    );
});