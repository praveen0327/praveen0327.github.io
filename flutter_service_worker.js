'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9edea2fdbbfde505a0eafa32c66c0f7a",
"assets/AssetManifest.bin.json": "197aa2dd0a3c28d7b51e20414d57a5a0",
"assets/AssetManifest.json": "8803c831ddff2f1dcb4f81e7113c376a",
"assets/assets/ac.jpg": "75216193bc40c0541d79e672dbdf6131",
"assets/assets/agnice.jpg": "ee655a1f7f5a8ff0e2146fcd44f9ac9b",
"assets/assets/aljiada.png": "2a8f91714ec44d74610045705a137995",
"assets/assets/almadena.png": "f4ac31d7ba31d636c6d995b86a2cec3a",
"assets/assets/clean.jpg": "87fd6b2e4c38aef6ca5c4b4eed8ae811",
"assets/assets/eastern.jpg": "fec64a53088a95caf24bdd732c4df01c",
"assets/assets/eei.jpg": "3e52f9beb6a2bd70ff2ff33d76fd6ac7",
"assets/assets/emmar.png": "4b4591e663c96ccfe32ef027dc9c2aed",
"assets/assets/ew.jpg": "f11dd160f3afabd1125b15cd877d2d80",
"assets/assets/fac.png": "402d30408fc137b9810c323ac4ac4cb6",
"assets/assets/indigo.jpg": "39f9c01e5860065ebcc94d88f2fdbc84",
"assets/assets/ins.png": "4f7cb5fbb28d0f9ddc97641f8b288735",
"assets/assets/jumbo.png": "a65cad0b69beb6934b58243a24595362",
"assets/assets/jumbo1.jpg": "daffc966be2060dd478fb16018dcfe97",
"assets/assets/jumbo2.jpg": "f7b046af71ec3ab84095ac4bac41a19a",
"assets/assets/lan1.jpg": "c1376e822180a9a209c6e8093ca78ac0",
"assets/assets/lan2.png": "7426f54f9f3a7900c78e0dd5e2981c6f",
"assets/assets/lan3.jpg": "33af23ebb533f57fc59292969947fdc1",
"assets/assets/mbm.png": "eea6bbe55df48dbd6fc1fd10a8319939",
"assets/assets/o1.png": "108c66da1734525b1f50981c57aa24db",
"assets/assets/o2.png": "b49ced34a3ca7b57bc80d6fe3d1a51ff",
"assets/assets/o3.png": "329bf0167b1d277d8cd91d90b57e4b5e",
"assets/assets/paint.jpg": "61006358d3aabc0ff878438e22952929",
"assets/assets/plaster.jpg": "dd1351a28fc609ff635f39dcafdc3fd4",
"assets/assets/Plumbing.jpg": "bdad80286b1c5e52702b7a8c279376fa",
"assets/assets/scw.jpg": "64db429646199bfa1972434b64e25f12",
"assets/assets/tiling.png": "e49c7a16f2a43a1c0343c55692f02f47",
"assets/assets/twi.png": "6352d995b0c2a0f882503daa1d99a2e7",
"assets/assets/whatsapp.png": "4058799402cd37c335379ee83d75c41e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "4a3116cc95f66125b5d6e79ffd2f6486",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "e94d9f4909bdf72854e6c723e614b071",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5ef4c8dd5f444432986382b56c87b0a8",
"/": "5ef4c8dd5f444432986382b56c87b0a8",
"l3.jpg": "f49dd55b1df2c82e4c2d29e698bfab58",
"l6.png": "74752f3f600567976bb0233a4d98d84b",
"main.dart.js": "a6929407e1a146ee72cff0f12e9212b0",
"manifest.json": "02e07c91aa2a30b72ba3c0b06469256d",
"version.json": "8d2b45fc32a428ddf9af620602ea001a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
