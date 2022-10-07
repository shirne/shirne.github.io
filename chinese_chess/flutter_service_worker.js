'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e2d45edfd6db9fa5eb2612485a29505c",
"assets/assets/engines/BOOK.DAT": "cd62f02f4c31121802e9560cf5694209",
"assets/assets/engines/eleeye.exe": "06dbc98052a17b1aa033e7ef77607493",
"assets/assets/images/action_background.png": "982bdaa0714b1dc1a0b933994ee03ff3",
"assets/assets/images/action_checkmate.png": "b9b279cb12aca593c1cab441353d8654",
"assets/assets/images/action_eat.png": "c39bc252c5728962f518be4ded795314",
"assets/assets/images/logo.png": "70c9458afa38a0a1efea5063759da564",
"assets/assets/images/splash.png": "0f566f2a959ee874cb619b0d0570e578",
"assets/assets/skins/woods/ba.png": "03f103a0e8dc4e91a59a1731be7938cc",
"assets/assets/skins/woods/bb.png": "5b2c63c5e0a7e24e0b8a6bb52caa8986",
"assets/assets/skins/woods/bc.png": "4a461be9e08bca878fab5cee4f5834eb",
"assets/assets/skins/woods/bk.png": "b225dfa3c3c2f579d667fb2e1d928eca",
"assets/assets/skins/woods/bn.png": "0d706b07bdaea614ea31ed6da2e66ebb",
"assets/assets/skins/woods/board.jpg": "b1595747af3930e1af765b79ce18399c",
"assets/assets/skins/woods/bp.png": "b23798f6a0907d62ade949aeee25adc7",
"assets/assets/skins/woods/br.png": "3d1fe005cf89bc55004d09151e714a85",
"assets/assets/skins/woods/config.json": "ab93d2852b06f914e4d52bff4a1016c9",
"assets/assets/skins/woods/ra.png": "aac946277b62e7e73bb10a68f2031efe",
"assets/assets/skins/woods/rb.png": "486be2bae26f30be74e29b0c22adcd59",
"assets/assets/skins/woods/rc.png": "0773aa0c85d4f21c4017492c3c25f138",
"assets/assets/skins/woods/rk.png": "8de176a77a9084452b0d847d3d6a61d3",
"assets/assets/skins/woods/rn.png": "65b56fba874ba22248af94d13ebb1ca6",
"assets/assets/skins/woods/rp.png": "aeb47df09a213463063be0c217f68f38",
"assets/assets/skins/woods/rr.png": "35832873e44e8c10d58ba1803b16d53f",
"assets/assets/sounds/capture.wav": "319a78d924d433b52fabe14982d32fb2",
"assets/assets/sounds/capture2.wav": "fbc9b12fea0e6d90173258d7d3e10b4e",
"assets/assets/sounds/check.wav": "05f05405965e23cb2ea1afd7141114d7",
"assets/assets/sounds/check2.wav": "7258680523dbb6e4a01ed1e37a0f4d92",
"assets/assets/sounds/click.wav": "6f952bd1f1ebbcf2ae7e4afd5b688eb4",
"assets/assets/sounds/draw.wav": "5c9018c1e5b865c4c3c01a55499ee837",
"assets/assets/sounds/illegal.wav": "aec0cefc838d5bfd93886a3a606f394d",
"assets/assets/sounds/loss.wav": "26490b3bed5a5f1e546cae80f12e6452",
"assets/assets/sounds/move.wav": "768025ca7aa144cda6a6cd8994d46583",
"assets/assets/sounds/move2.wav": "ada48a396489567f0c035ecac9b0f6a6",
"assets/assets/sounds/newgame.wav": "ba9a4c1abd561a5158ec5b0fd4c8a7a4",
"assets/assets/sounds/win.wav": "3b90f04f72bd7c2d4bb6395e6112bf07",
"assets/FontManifest.json": "8d9ed386105956ca48b6cea9b5e793b2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "662b27466bca7e867fe934f001e05ed5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/shirne_dialog/assets/fonts/icons.ttf": "524bbbef125d14f9005236a64a4c90f1",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "9eb8a7030c1073cc04ae1667e267e9e2",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "a68b91f7217890c5c4885ae2d17cd1c9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "654e81dc7656411088d55c5933ecfb73",
"icons/Icon-512.png": "225ab4376fc3c32ac34f6e81a29bdac1",
"icons/Icon-maskable-192.png": "654e81dc7656411088d55c5933ecfb73",
"icons/Icon-maskable-512.png": "225ab4376fc3c32ac34f6e81a29bdac1",
"index.html": "a43c945c71cf6aa5723895b16ad7b982",
"/": "a43c945c71cf6aa5723895b16ad7b982",
"main.dart.js": "7a1cf13e01a908ed63522ff9567a2f89",
"manifest.json": "8168db986bd7c279c14f89bcdb0ac190",
"splash/img/dark-1x.png": "95326c40fd65529a277c9e785222ee44",
"splash/img/dark-2x.png": "eec3a7cfc4d3dc5ffdf21fea49124d36",
"splash/img/dark-3x.png": "3a9338324d4b113b9c187d0feb2edc99",
"splash/img/dark-4x.png": "6b82ed6d91c0e3a97540cf1050f573e8",
"splash/img/light-1x.png": "95326c40fd65529a277c9e785222ee44",
"splash/img/light-2x.png": "eec3a7cfc4d3dc5ffdf21fea49124d36",
"splash/img/light-3x.png": "3a9338324d4b113b9c187d0feb2edc99",
"splash/img/light-4x.png": "6b82ed6d91c0e3a97540cf1050f573e8",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "db6178791b6369b77311c0ae92809585",
"version.json": "28058f287638edbbdf7419c3ecd3911b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
