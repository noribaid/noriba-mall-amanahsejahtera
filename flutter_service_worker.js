'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "48a48306dbd0fc35d3290a6e03f3dfc1",
"version.json": "ea38a1e585d1ed784047daa366f4a6e4",
"splash/img/light-2x.png": "b9b32ae98edb017b6f30c6b7c817cebb",
"splash/img/dark-4x.png": "1d009e9302677c4c8169b8f73c01abb7",
"splash/img/light-3x.png": "ff3003d1d65691c12f3f5e981b0b4580",
"splash/img/dark-3x.png": "ff3003d1d65691c12f3f5e981b0b4580",
"splash/img/light-4x.png": "1d009e9302677c4c8169b8f73c01abb7",
"splash/img/dark-2x.png": "b9b32ae98edb017b6f30c6b7c817cebb",
"splash/img/dark-1x.png": "b4e0ea1dc864365bf2b42bf340f66ab1",
"splash/img/light-1x.png": "b4e0ea1dc864365bf2b42bf340f66ab1",
"favicon.ico": "60c22070e59910386facdf3764bb84f9",
"index.html": "c5d916c03b5055cbb3ccb6cad7c5067c",
"/": "c5d916c03b5055cbb3ccb6cad7c5067c",
"main.dart.js": "a117184d0649f41ea3769ac732c0f41a",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "329350e437cf717d4f111077d037a868",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "08ceaafdc79ab1fb8aa2181b435f26a3",
"assets/NOTICES": "3b244541b5623b37624d1b9e23e4ecba",
"assets/env": "3c9b89c15c573b102ba0ba74ef4a2b49",
"assets/FontManifest.json": "31ad5276c32fafd6206480c297f185e3",
"assets/AssetManifest.bin.json": "6c2bce919ec11b388f1101235a82d939",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/mixpanel_flutter/assets/mixpanel.js": "48a5241deca6bca875259d2b562d7081",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/camerawesome/assets/icons/1_1.png": "9fccda0fa73f4e7870fc9db46a61b8f5",
"assets/packages/camerawesome/assets/icons/16_9.png": "ee01c5857314518ac7f3e31d891ae436",
"assets/packages/camerawesome/assets/icons/4_3.png": "0091aca9a18eb33b968ec3abf62699a3",
"assets/packages/camerawesome/assets/icons/minimized.png": "1589a3aefe13c85c8bf2296863881c3d",
"assets/packages/camerawesome/assets/icons/expanded.png": "b8bce8882199b9e134b7b2d102317d3a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "eb4453d8568af2916b34babb0cccef6e",
"assets/fonts/MaterialIcons-Regular.otf": "5749bb894d507b1e9f0faa9a49f9a2f6",
"assets/assets/images/logo_speed.png": "eb9a3ad89fd1a140ef3f6f48476144f4",
"assets/assets/images/head_close_mouth.png": "3947b4d3813686bd3fac5fc1bf01a6be",
"assets/assets/images/top_decoration_green.png": "d6313d37587b373c52f9afc2a7f7f58e",
"assets/assets/images/speedpay_logo.png": "8d83f8d3d7213e994a2c16087f9b85fb",
"assets/assets/images/bg_card_funder_v2.png": "c9a804a2837c89e1caa54852069c2bdc",
"assets/assets/images/card_preview_camera.png": "94fc39540e0b8ca0730d90ed04b416f7",
"assets/assets/images/img_saran.png": "8604c68808660a5ece1e63e061322730",
"assets/assets/images/img_dummy_sell.png": "dd0cc30ac1e0171c386ea6cc3a14a554",
"assets/assets/images/image_no_promo.png": "892ee7b86f216c13cf685e424b542bb8",
"assets/assets/images/wave_header.png": "9b9f2e8fd31c1297ebf7eefc0fc86bd5",
"assets/assets/images/head_up.png": "7e50c2f274b7360c728496f57e8f15c2",
"assets/assets/images/bottom_decoration_green.png": "963292122857b7578ee4b3f0afd0641c",
"assets/assets/images/feedback_succed.png": "92cd0c80e7ed234795b2eb75fd314049",
"assets/assets/images/speedpay_logo_all_white.png": "77e9d1c1248c89583e7faa2d7074ad14",
"assets/assets/images/image_alasan_2.png": "d761e3449c8241bfb6971d29e958c023",
"assets/assets/images/image_alasan_3.png": "0e51e7d304c039624f1084c1d3a9154f",
"assets/assets/images/brand_logo_noriba.png": "b092a45cb26b5e3309e68f28af95ce58",
"assets/assets/images/jual_beli_image.png": "92ae09ef16ad198ae22830e4dbfe269a",
"assets/assets/images/colored_noriba_logo.png": "9ed01c90719470d9d3e6d043735a683a",
"assets/assets/images/logo_speed_dark.png": "4bd883ea917c766e93ec4a820d86f7e5",
"assets/assets/images/image_alasan_4.png": "2485bf964851b0e45981575f3d1cbe0c",
"assets/assets/images/bg_card_funder_green.png": "bcfbec825a6b0fbed9ab57108e9ef13d",
"assets/assets/images/contoh_katalog.png": "d47da00b8f07340505f686cbbe9a796d",
"assets/assets/images/bg_card_pengajuan_green.png": "9b6a66649f1d22f9668132644f4473bf",
"assets/assets/images/bg_decorated_info.png": "2bbc1676c120431de5c0eb5461f8c71b",
"assets/assets/images/speed_logo_splash.png": "fdf787b30d1b4d8070b205e4518bf898",
"assets/assets/images/bottom_decoration.png": "136680490521cf44d9bd4573e2cb01d2",
"assets/assets/images/img_box.png": "90622bda2a0442982dceffab6ca804ba",
"assets/assets/images/top_decoration.png": "90e671c4906de6de866ab1d7ae1c692c",
"assets/assets/images/livenes_act.png": "2d90f4b38c51b89eb89786f2f3037084",
"assets/assets/images/imgae_alasan_1.png": "fa33b2c4a44bf25d8ae682ece84f3466",
"assets/assets/images/img_promo.png": "84bf4364fed55e6bc015949c5b2ba291",
"assets/assets/images/bg_pengajuan_card.png": "cff20e6a1a3c925408dac3901b87b648",
"assets/assets/images/tutorial_1.png": "e0553124a7ce9ddc7bd167596459e217",
"assets/assets/images/tutorial_3.png": "6c766b6094852bff27020f248a4393ce",
"assets/assets/images/liveness_act_left.png": "52e45d4066004f313fe1d4e8f6e15770",
"assets/assets/images/tutorial_2.png": "0f243cff2621ef6e0d07682965d6801f",
"assets/assets/images/tutorial_6.png": "60955a1d0ab30593f1f5020010feb89d",
"assets/assets/images/card_decoration_1.png": "2ba6d904826565aeee99ea8814a9a4bb",
"assets/assets/images/head_left.png": "571c5eb69945731b3cbdfafd1b09655f",
"assets/assets/images/tutorial_5.png": "78cd1108bba1114f47478aefc606c763",
"assets/assets/images/card_decoration_2.png": "21e22c37f188a74fb333c1c0e8f73750",
"assets/assets/images/card_decoration_3.png": "2ddd7c1e4d0de61732e41f4861d667e7",
"assets/assets/images/splash_uy.png": "b46870637b90dd9015e142dad398a8a6",
"assets/assets/images/bg_card_funder.png": "6228fd9348f7753619d69e977e5eacea",
"assets/assets/images/tutorial_4.png": "844782969e9f5d7cc198afaf5a14b744",
"assets/assets/icons/ic_show.png": "adacaa194a6a6c65e7168cb4a899185d",
"assets/assets/icons/ic_warning_red_round.png": "6fc0e3b470a9766463e0471456755cf6",
"assets/assets/icons/ic_profile_black.png": "c78d6c7e07fb595843d7065de4519d01",
"assets/assets/icons/ic_promo_black.png": "77e6939f9c50105ee6f045caafbf4b82",
"assets/assets/icons/ic_wa.png": "80c5b402aca2eace4d2b484b0fcf96f2",
"assets/assets/icons/ic_schedule.png": "d8aff3d5662e4d2ec8bd4b8912e5e853",
"assets/assets/icons/ic_request_product.png": "0f027ef0563a285bee46b0f126d52a75",
"assets/assets/icons/ic_home.png": "78a619bf25e1858c7cc10e2d42154c1a",
"assets/assets/icons/ic_bsi.png": "caf87b4ec268286d077a2081238ebd52",
"assets/assets/icons/icons_loading.png": "df26652c05cdab6c09a86d8caf10bae0",
"assets/assets/icons/ic_tenor.png": "e528fd26dd594fe38bd0304ae839ca45",
"assets/assets/icons/ic_notif_white.png": "9a2aaffd834d47e5c65c3f50d016e844",
"assets/assets/icons/ic_riwayat_transaksi_green.png": "6f1b904ba589981ab45dfd440da5dd8c",
"assets/assets/icons/ic_cancel_transaction_status.png": "df2513e96e7c0e7b9b7aa2a7dfc0f2a6",
"assets/assets/icons/dummy_ic_funder.png": "772642ff7bebbdeaa225f938448032ad",
"assets/assets/icons/ic_mandiri.png": "aaa9536f6e8488fd2059121c0f41843d",
"assets/assets/icons/ic_bca.png": "1ded95f5d6ced5d4b1e1ab103c76f568",
"assets/assets/icons/raise_hand.png": "6c3a1a408447746a89cdaf96e76f4c90",
"assets/assets/icons/ic_discon.png": "2ecf01e3ee062e3d61a018b5bcbfc991",
"assets/assets/icons/request_product_icon.png": "7176414b9a911ccf50155a857c936095",
"assets/assets/icons/ic_profile.png": "2ca983480fe232d50bee5dd2d2a49d01",
"assets/assets/icons/check_circle_outline.png": "32da6cb7e82e82c1ef44e38d608a13dd",
"assets/assets/icons/ic_detail_funder.png": "9f3baade18b67d95327dfb3c670c20ec",
"assets/assets/icons/ic_cicilan_black.png": "458dad5a0fe479a695c4afff5a4eb366",
"assets/assets/icons/ic_idea.png": "61ca00f5919a40578db222bfa1c81589",
"assets/assets/icons/ic_transaksi_black.png": "63a1505029a6026dcd89cad36010b973",
"assets/assets/icons/ic_catatan.png": "83d136f8acad8b06e751f99025ed289f",
"assets/assets/icons/ic_product_detail_transaksi.png": "2f785bb5d9727193836b40f412c3c221",
"assets/assets/icons/ic_payment.png": "5caf44761f90b3ee0bf99c585d98c975",
"assets/assets/icons/ic_launcher.png": "1a18e5f2017fb6cbf02ff393173c9de9",
"assets/assets/icons/ic_hide.png": "35b40bf26ffb50b5da4d68f89e492916",
"assets/assets/icons/ic_ajukan_pembiayaan.png": "90d02e34b12d916d36e64d9c855045ee",
"assets/assets/icons/ic_promo_orange.png": "a16799f764b075912e74e684ac19f02a",
"assets/assets/icons/ic_notif.png": "60df1ca6b02b06571cf9e967778052af",
"assets/assets/icons/ic_purchase.png": "3d0f83030125f25fbe815af67b8877f2",
"assets/assets/icons/ic_discount.png": "6916cffe71620a1346322437013bff8b",
"assets/assets/icons/lv3.png": "440fa60bebd62cca71e35fd5b83186f9",
"assets/assets/icons/ic_wallet.png": "a8a8aa4882ee7599f822bdf6bcf5df11",
"assets/assets/icons/lv2.png": "43aa7307e26030862f2237aeac018fe0",
"assets/assets/icons/ic_detail_funder_green.png": "6acd9a7080887f7bcb931ddf9ecd2613",
"assets/assets/icons/ic_helpdesk.png": "d94c1355fdbcda8fae05a11af05a39a8",
"assets/assets/icons/icon_notif_green.png": "aa2d89c027c654a3d5598c90f44cd6ed",
"assets/assets/icons/ic_warning.png": "0248c027722ccf234b9df286d0d5d4c0",
"assets/assets/icons/ic_request_product_green.png": "2a91816994fbb3ee0235982023d2b9d5",
"assets/assets/icons/ic_home_black.png": "ddf3197062a4e0beca72ed3a33adb081",
"assets/assets/icons/lv1.png": "b6af562dfee24c377ccd96fb55d1fd84",
"assets/assets/icons/icon_check.png": "094acb0c607a1364729a5fdfe4cc25c8",
"assets/assets/icons/ic_warning_red.png": "f053a1f6647af785524196d42790a890",
"assets/assets/icons/lv5.png": "4849208df52b9e516e041ebfa532b705",
"assets/assets/icons/icon_beli.png": "3f27cdfa891d968b26918cdf86e69db6",
"assets/assets/icons/ic_riwayat_transaksi.png": "e045d4933665d47f768f515f4229c8cb",
"assets/assets/icons/lv4.png": "e86aa8e6358b769bbd9fc45fe1abb6f5",
"assets/assets/icons/ic_launcher_ksbm.png": "5b6e82b37c0a8b8a4c58d8f1a8716676",
"assets/assets/icons/ic_shoping_green.png": "4dacc89b78f66f1241010f34e6e7e51b",
"assets/assets/icons/ic_discount_small.png": "20b17167ffc2f07a36258407c642b298",
"assets/assets/icons/ic_card_total_promo.png": "6726919b2ec2f3d0fd5f732a4ada5ddd",
"assets/assets/fonts/Poppins-Regular.ttf": "29cc97af5403e3251cbb586727938473",
"assets/assets/fonts/Poppins-Italic.ttf": "8694b2396caee6c23c74064875d173f0",
"assets/assets/animations/notif_animation.json": "30e7f600246745d440db13fe2714b8f3",
"assets/assets/animations/sign_animation.json": "a203b83f842d0d075ef7b8c91ee8f93c",
"assets/assets/animations/error_animation.json": "8026ddb1c365585fce1f4971e1d48699",
"assets/assets/animations/succed_animation.json": "b924898bc4b9d4130705ffa67a7755c4",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
