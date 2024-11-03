// nombre del cache
const CACHE_NAME = 'cache-app-0';
const nocache = [
  'jsonblob.com',
  'devapiservice.com',
  'cors-anywhere.herokuapp.com',
  'api.telegra.ph',
  'api.telegram.org',
  'oauth.telegram.org',
  'cse.google.com',
  'api.counterapi.dev',
  'api.github.com',
  'encrypted-tbn0.gstatic.com'
];

// Instalar el service worker
self.addEventListener('install', (event)=>{
  event.waitUntil(caches.open(CACHE_NAME).then((cache)=>{
    console.log('Cache abierto');
    // Precache the offline page
    return cache.addAll(['offline.html']);
  }
  ));
}
);

// Activar el service worker
self.addEventListener('activate', (event)=>{
  event.waitUntil(caches.keys().then((cacheNames)=>{
    return Promise.all(cacheNames.map((name)=>{
      if (name !== CACHE_NAME) {
        return caches.delete(name);
      }
    }
    ));
  }
  ));
}
);

// Manejar las solicitudes de red
self.addEventListener('fetch', (event)=>{
  const url = new URL(event.request.url);

  if (url.origin === self.location.origin) {
    // Solicitudes del mismo origen
    event.respondWith(fetch(event.request).then((response)=>{
      // Clonar la respuesta porque solo puede ser leída una vez
      const responseClone = response.clone();
      // Guardar la respuesta en la caché
      caches.open(CACHE_NAME).then((cache)=>{
        cache.put(event.request, responseClone);
      }
      );
      return response;
    }
    ).catch(()=>{
      // Si falla, buscar en la caché
      return caches.match(event.request).then((cachedResponse)=>{
        // Si no hay respuesta en caché, devolver la página offline
        return cachedResponse || caches.match('offline.html');
      }
      );
    }
    ));
  } else {
    // Solicitudes de otros orígenes
    event.respondWith(caches.match( event.request ).then((cachedResponse)=>{
      return cachedResponse || fetch(event.request).then((response)=>{
        // Clonar la respuesta porque solo puede ser leída una vez
        const responseClone = response.clone();
        // Guardar la respuesta en la caché
        caches.open(CACHE_NAME).then((cache)=>{
          if (!nocache.includes(url.hostname)) {
            cache.put(event.request, responseClone);
          }
        }
        );
        return response;
      }).catch(()=>{}
     );}
    ));
  }
}
);
