const V="darija-v1";
const F=["./","index.html","style.css","cours.js","moteur.js","manifest.json","icon.svg","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>{const n=fetch(e.request).then(x=>{if(x&&x.ok){const y=x.clone();caches.open(V).then(c=>c.put(e.request,y))}return x}).catch(()=>r);return r||n}))});
