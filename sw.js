const C='arena-v2',U=['https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js','https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js','https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/utils/BufferGeometryUtils.js','https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/utils/SkeletonUtils.js','https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js','./','index.html','manifest.json','icon.png','assets/char.glb','assets/guns.glb'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.allSettled(U.map(u=>c.add(u)))));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
self.addEventListener('fetch',e=>{const q=e.request,u=new URL(q.url);if(q.method!='GET')return;
const put=r=>{const y=r.clone();caches.open(C).then(c=>c.put(q,y));return r},cf=()=>caches.match(q).then(r=>r||fetch(q).then(put));
if(u.origin==location.origin&&!u.pathname.includes('/assets/'))e.respondWith(fetch(q).then(put).catch(()=>caches.match(q)));
else if(u.origin==location.origin||u.host=='cdn.jsdelivr.net')e.respondWith(cf())});
