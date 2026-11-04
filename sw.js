const C='arena-v1',CDN=['https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js','https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json','icon.png',...CDN])));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{const q=e.request,u=new URL(q.url);if(q.method!='GET')return;
const put=r=>{const y=r.clone();caches.open(C).then(c=>c.put(q,y));return r};
if(u.origin==location.origin)e.respondWith(fetch(q).then(put).catch(()=>caches.match(q)));
else if(u.host=='cdn.jsdelivr.net')e.respondWith(caches.match(q).then(r=>r||fetch(q).then(put)))});
