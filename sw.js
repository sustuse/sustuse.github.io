/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404/index.html","5a8b748c0b0cb5657a4f811d9a815d74"],["/about/index.html","74b505f698ae86e715a1a75bbd0cdc9f"],["/assets/css/main.css","7c11471c1e8f1473d63d794f0028f628"],["/assets/img/favicon.jpg","ffb9f5c8afdda7fa4f3fd697e5147182"],["/assets/img/icons/android-chrome-192x192.png","4df4c8779d47bcaa69516050281773b9"],["/assets/img/icons/android-chrome-256x256.png","939ec88a61f407945a27d867fca1651d"],["/assets/img/icons/apple-touch-icon.png","366666899d15cf8f6811cc73ee0d63de"],["/assets/img/icons/favicon-16x16.png","f625044491b20a5df78571ba266cbcf6"],["/assets/img/icons/favicon-32x32.png","67502381e45848a4ab76123364675ffe"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","1cea2ceb806d1a018330a51a1d8b73b6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/posts/ivo.jpg","f09824459d94796c5d99d4e303379b5e"],["/assets/img/posts/ivo_lg.jpg","718b8c059faf11cfbb20b226de2a0959"],["/assets/img/posts/ivo_md.jpg","567facee1c761fdb02556ae30f50865c"],["/assets/img/posts/ivo_placehold.jpg","e49cd72d5931a3b0a72f5afeb334fad5"],["/assets/img/posts/ivo_sm.jpg","23c5f27b7a2fd8483d5c3ff548613cdd"],["/assets/img/posts/ivo_thumb.jpg","47f91df934ed22a76c2eaa0a5b7a0c82"],["/assets/img/posts/ivo_thumb@2x.jpg","aa12706b57f9563d5cf90b42fa895598"],["/assets/img/posts/ivo_xs.jpg","9a2e7fd1f60ffb8456d2e4b5e69a5e60"],["/assets/img/posts/lukas.jpg","7b58f9cd30f51c0bcd8a43917d580b08"],["/assets/img/posts/lukas_lg.jpg","7b58f9cd30f51c0bcd8a43917d580b08"],["/assets/img/posts/lukas_md.jpg","7b58f9cd30f51c0bcd8a43917d580b08"],["/assets/img/posts/lukas_placehold.jpg","3ad771025e2b625c749543d68e5f93c2"],["/assets/img/posts/lukas_sm.jpg","7b58f9cd30f51c0bcd8a43917d580b08"],["/assets/img/posts/lukas_thumb.jpg","7b58f9cd30f51c0bcd8a43917d580b08"],["/assets/img/posts/lukas_thumb@2x.jpg","7b58f9cd30f51c0bcd8a43917d580b08"],["/assets/img/posts/lukas_xs.jpg","7b58f9cd30f51c0bcd8a43917d580b08"],["/assets/img/posts/matthias.jpg","cc0c7db4f9ae4e40322b0473b6583aca"],["/assets/img/posts/matthias_lg.jpg","cc0c7db4f9ae4e40322b0473b6583aca"],["/assets/img/posts/matthias_md.jpg","cc0c7db4f9ae4e40322b0473b6583aca"],["/assets/img/posts/matthias_placehold.jpg","cc0c7db4f9ae4e40322b0473b6583aca"],["/assets/img/posts/matthias_sm.jpg","cc0c7db4f9ae4e40322b0473b6583aca"],["/assets/img/posts/matthias_thumb.jpg","cc0c7db4f9ae4e40322b0473b6583aca"],["/assets/img/posts/matthias_thumb@2x.jpg","cc0c7db4f9ae4e40322b0473b6583aca"],["/assets/img/posts/matthias_xs.jpg","cc0c7db4f9ae4e40322b0473b6583aca"],["/assets/img/posts/news.jpg","2a4b6c16a9a12a22aacf9935062448c9"],["/assets/img/posts/post1.jpg","162bfc7c109fbb3a8406c0e1737a3d78"],["/assets/img/posts/post1_lg.jpg","4084dcdf2dbd64557192982652c1d57e"],["/assets/img/posts/post1_md.jpg","9b09f6e2b53404b04e7d55b7853463fa"],["/assets/img/posts/post1_placehold.jpg","dba0e2ebde6216f56effa3cf7d2aa93d"],["/assets/img/posts/post1_sm.jpg","f823ea10f8d6663b1a5059d775380044"],["/assets/img/posts/post1_thumb.jpg","956f0f839e5cdf3cd566c37e2dfb979b"],["/assets/img/posts/post1_thumb@2x.jpg","82f0706b710efe9506f64c307894a9c7"],["/assets/img/posts/post1_xs.jpg","15f2aa1458c589c4bd507c12ee62e933"],["/assets/img/posts/post2.jpg","c30a771722fcfaac831beaf5d6510e6d"],["/assets/img/posts/post2_lg.jpg","c30a771722fcfaac831beaf5d6510e6d"],["/assets/img/posts/post2_md.jpg","c30a771722fcfaac831beaf5d6510e6d"],["/assets/img/posts/post2_placehold.jpg","acb9ddb4f4eb796096dfb5e7bafd69af"],["/assets/img/posts/post2_sm.jpg","6aa8df7e16dbfea16080510bc2f14cff"],["/assets/img/posts/post2_thumb.jpg","859620945b4bdea1da513c499fb9aa57"],["/assets/img/posts/post2_thumb@2x.jpg","c30a771722fcfaac831beaf5d6510e6d"],["/assets/img/posts/post2_xs.jpg","3c3e00722266c363b9fdd855cd074aae"],["/assets/img/posts/post3.jpg","7f503eb8dc2a33d47f6c4824fbd7404b"],["/assets/img/posts/post3_lg.jpg","1fee8a4ddc0ebcce01f5bda8283fae5e"],["/assets/img/posts/post3_md.jpg","94c071f2ea210171a5c2af2d39fc348f"],["/assets/img/posts/post3_placehold.jpg","84de34b4aaf3f1720c1bffbe700e3748"],["/assets/img/posts/post3_sm.jpg","f95095ed4bdf0afdd8d80cf0571f03e4"],["/assets/img/posts/post3_thumb.jpg","1f77869dc501073d1d9ad54a9273bac0"],["/assets/img/posts/post3_thumb@2x.jpg","f60892667d958f275639a7c172880c8d"],["/assets/img/posts/post3_xs.jpg","668376a54d0001460198a3eb03ae9ceb"],["/assets/img/posts/test.jpg","d20aecb59a949b49a44a75890cd27820"],["/assets/img/posts/test_lg.jpg","eca0cbb9e380b9c1dbeec5e91cfc3f46"],["/assets/img/posts/test_md.jpg","68cb599fcbf723aa80b0f5c18cf23f2e"],["/assets/img/posts/test_placehold.jpg","77f822a83bd7244e9fd870b63ea2bf95"],["/assets/img/posts/test_sm.jpg","bd40145c68f20d924301266448eefe90"],["/assets/img/posts/test_thumb.jpg","1197597e744ab5272982632756c19010"],["/assets/img/posts/test_thumb@2x.jpg","d91efb865240bcee9fe375f90624b49c"],["/assets/img/posts/test_xs.jpg","bfa2c1a5758e82c0941a9fecf141670c"],["/assets/js/bundle.js","e76e8a9292cff56315328ec94571de36"],["/contact/index.html","d678600b4bb128370d893ed46efa8fc8"],["/index.html","f54c5a3aa61ff136f03d98384c2a3361"],["/post1/index.html","e711cede9ce063d9752cfdd54bc8975e"],["/post2/index.html","359b9abe9bcb378d64092714f3acdcb9"],["/post3/index.html","e20fc46915680b6620c972aea6ec0427"],["/sw.js","69e679bc1bcb6f454e22649b09a607a7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







