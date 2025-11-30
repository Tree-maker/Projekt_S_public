'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c8c5b94aa35fdcbda33b2e9278e63a05",
"assets/AssetManifest.bin.json": "0d16b1c6101002fa59e05833c8980006",
"assets/AssetManifest.json": "35ccf0a61ff1b1d6aec931e1dda8108d",
"assets/assets/configFiles/config.json": "a8688b19b332a5a7e1a6deb70108da19",
"assets/assets/images/Image1.jpg": "a27f5025374f930a4c3bed42261f524f",
"assets/assets/images/Image10.jpg": "f18141f22decb949cfe8b09363c792b0",
"assets/assets/images/Image11.jpg": "33610273fed1dd84d6c204cb0e0fd160",
"assets/assets/images/Image12.jpg": "fab9618ee169f23db195a1f4a5deb9bf",
"assets/assets/images/Image13.jpg": "10c8f3ef1eeb8890962b467712bee688",
"assets/assets/images/Image14.jpg": "ffa239b72bde091664e289499ca9bfc1",
"assets/assets/images/Image15.jpg": "3e278173b7330de2305adb3aec84d887",
"assets/assets/images/Image16.jpg": "e728d704ac8c970b8120665c8fe01548",
"assets/assets/images/Image17.JPG": "3bd563b83cc899c699f3d5338f3a2d30",
"assets/assets/images/Image18.JPG": "1ffecb201ccd07d0dc1e4381c1539018",
"assets/assets/images/Image19.JPG": "95745c6c37872adff675028a55b32308",
"assets/assets/images/Image2.JPG": "d06728f4388d0f0756a17481a4ee2b21",
"assets/assets/images/Image20.JPG": "6cce8c6bb547309baf6e09adf8f5cbc2",
"assets/assets/images/Image21.JPG": "9112aca5515c5ceb0a14c0c2520221cf",
"assets/assets/images/Image22.JPG": "8892f0e6ca1c7b03b69cc227098a884a",
"assets/assets/images/Image23.jpg": "752fb7284e21b9dfc781c72cdb951598",
"assets/assets/images/Image24.jpg": "6fc25f9312d67e5f92975bb97939b474",
"assets/assets/images/Image3.JPG": "b050597f96e579446aa7ff9c92358433",
"assets/assets/images/Image4.JPG": "cdfe55b47e728334fc08546d9ffd8c60",
"assets/assets/images/Image5.JPG": "a6cf21f760be96af6043d18b8ef7f5d3",
"assets/assets/images/Image6.JPG": "f34fab8f5b1d289d8cd5bde42cbc91ee",
"assets/assets/images/Image7.jpg": "e5be64a5f6755ca0cd3d42c8dffeb288",
"assets/assets/images/Image8.JPG": "3eb5229ef97dab8ec1719d84b19d0f22",
"assets/assets/images/Image9.JPG": "111aacb373630d831792ed44f9085279",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "4e166e532c9e4f0a5b2b0beb5cdaa4f4",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dfdf4c18bcf8f3aec88ab5e666ed3cc1",
"/": "dfdf4c18bcf8f3aec88ab5e666ed3cc1",
"main.dart.js": "2f7c5b7196720abdaf7d91851c48bac4",
"manifest.json": "18b05de58f5aeed2ffa6be1246cc43f1",
"version.json": "731e1c91de4103595d12e3ffa1699cac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
