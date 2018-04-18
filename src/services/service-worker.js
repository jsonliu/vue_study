/**
 * Created by jsonliu on 2017/10/18.
 */

"use strict";

function setOfCachedUrls(t) {
  return t.keys().then(function(t) {
    return t.map(function(t) {
      return t.url
    })
  }).then(function(t) {
    return new Set(t)
  })
}
var precacheConfig = [
    ["https://static.baobaobooks.net/dist/00c66eed6c907227d034.js", "60e554676e612314e3307d8852faf207"],
    ["https://static.baobaobooks.net/dist/019c7be9901fa15d047a.js", "e283d17aec26273abe21421d6ac6c796"],
    ["https://static.baobaobooks.net/dist/068ca78.png", "068ca782e118d538d974582227b3aa2d"],
    ["https://static.baobaobooks.net/dist/09d30be31d428555fa7b.js", "cbebee4c9e92fae9fe3e4efcfefec215"],
    ["https://static.baobaobooks.net/dist/0b09785.png", "0b09785c9c1fcca5c03c0392ce489466"],
    ["https://static.baobaobooks.net/dist/0cd599d4d120f9f5b8f7.js", "38e10b1dc7a4cd428c32465c2f77c137"],
    ["https://static.baobaobooks.net/dist/113616bbd6b4333318e7.js", "ae30acfeb231927366ed241740c869bc"],
    ["https://static.baobaobooks.net/dist/118bcf86dfabf2609faa.js", "db55111f182f3cc9d7f47bb529619bde"],
    ["https://static.baobaobooks.net/dist/1411182f23269c115ad7.js", "010b985b49a71b993e20e2306867d92d"],
    ["https://static.baobaobooks.net/dist/1835a52eb3db19f3b91d.js", "8655f7e4de599c9d4dd67fc5d00cc13c"],
    ["https://static.baobaobooks.net/dist/1a0b76431cdbadb4749d.js", "2d4269723b05b021ec04b2ea1062d1d5"],
    ["https://static.baobaobooks.net/dist/1dab44259b3866d4d304.js", "44340b98019050d721ab3385ae6453bc"],
    ["https://static.baobaobooks.net/dist/201b5fd5541f8f092a9d.js", "a5540c65f0c5621594efcbb5e1438379"],
    ["https://static.baobaobooks.net/dist/204d54f227b1d4e54d81.js", "00bfcdca29b81965744c01ef7d8b46b5"],
    ["https://static.baobaobooks.net/dist/2277ae1.png", "2277ae133a6c54ae4888a63823683e3b"],
    ["https://static.baobaobooks.net/dist/2630312.png", "2630312469adac1760c3bbf1364a0ac1"],
    ["https://static.baobaobooks.net/dist/268e7666f5d6c53aa703.js", "6193f68797e3979a8d991881b64da4d9"],
    ["https://static.baobaobooks.net/dist/28e272affa777f323422.js", "961fe4862483c9f17132436e5f3a5100"],
    ["https://static.baobaobooks.net/dist/297d06409c809be6fbe1.js", "e6199b07c23eac0c260a07ca8121ba96"],
    ["https://static.baobaobooks.net/dist/2f9ce128002b79cb6a63.js", "ce16f049792b6c23ba07958be011e8cc"],
    ["https://static.baobaobooks.net/dist/3374921edbf55430a865.js", "8813a83d43ff5f54502e5c9791691877"],
    ["https://static.baobaobooks.net/dist/347366c.png", "347366cbc827905ba7d627970d1bdcc0"],
    ["https://static.baobaobooks.net/dist/3cfe7e069c2295ee4c73.js", "50129e238f01b2d0a69ace69c0996901"],
    ["https://static.baobaobooks.net/dist/3d684adf45619a3a3827.js", "5025892e8df84fe704b8cf694ade54b3"],
    ["https://static.baobaobooks.net/dist/47cbc55.png", "47cbc556e701b0d4a7f37522d13b17d0"],
    ["https://static.baobaobooks.net/dist/4c153d981d41eb13980d.js", "7e007e600b2c40864eb03e67e4818dce"],
    ["https://static.baobaobooks.net/dist/538d8c39560a8c1cee50.js", "4d641b67a73a23e08a360d61b4ba66eb"],
    ["https://static.baobaobooks.net/dist/6164b02c4f7e172983da.js", "36e7516184ca036109fa19afe025e5a1"],
    ["https://static.baobaobooks.net/dist/6234afb206d0d964de7c.js", "04783838f89b9aae89026bed28d43c8d"],
    ["https://static.baobaobooks.net/dist/640352e4fef87e652fa1.js", "e7d332a7f103b755be25230bc1ecd76f"],
    ["https://static.baobaobooks.net/dist/654bc988951707471f89.js", "33cb6f053bacdb480c5787eb8460a878"],
    ["https://static.baobaobooks.net/dist/65f1828dfb1be430cfe9.js", "3680c45776748b8a4850f23b67c4ddd3"],
    ["https://static.baobaobooks.net/dist/68c8f520350da68ac1f1.js", "c175b2d7af41ab00ae35437e5c08e862"],
    ["https://static.baobaobooks.net/dist/68cd47bc656ca6daf50f.js", "3ce74f274bd4a6e76f4a105b650e51d6"],
    ["https://static.baobaobooks.net/dist/69f02542ceda4b4450c4.js", "893c5acc72020596a15cb6b5c01d712e"],
    ["https://static.baobaobooks.net/dist/6bdbfbca1ff7d68d40ea.js", "cb7594d295d1168d4c70240658879ac0"],
    ["https://static.baobaobooks.net/dist/743863e.png", "743863e100bcbf56d67ea3d919403a48"],
    ["https://static.baobaobooks.net/dist/77357d1ff877a8bf4b6f.js", "16f589f89c23347a70fdee0dc0c458b0"],
    ["https://static.baobaobooks.net/dist/7a12a91cc8cc25cf98a4.js", "7046ca58e4832dba9ed5a319755e6356"],
    ["https://static.baobaobooks.net/dist/7b28b983ebb10eaae5fe.js", "1de770412d1bdaae8cf36d91e8cc048f"],
    ["https://static.baobaobooks.net/dist/80f3583d4d757878a019.js", "ef04f95790d596f8518c4a002f02a796"],
    ["https://static.baobaobooks.net/dist/85e199d.png", "85e199dbf98353a36917bdb3d2e279f2"],
    ["https://static.baobaobooks.net/dist/89319927eb4b586e987f.js", "c236482c13139d61f21055525351f670"],
    ["https://static.baobaobooks.net/dist/8cab72df4b487be2a8d1.js", "f158f49d4e7480a3ddc154565e12484a"],
    ["https://static.baobaobooks.net/dist/8d10ffdd42b551fb5c29.js", "4e78014f90f6a122cdc0a9c58539972c"],
    ["https://static.baobaobooks.net/dist/8e16b89.png", "8e16b89d21396fcb6262433a27eba2ee"],
    ["https://static.baobaobooks.net/dist/944e5f63a4e96e3f26d8.js", "5ee2ab89ba3db4326a51d6ba4ede42b7"],
    ["https://static.baobaobooks.net/dist/97ee1e1.png", "97ee1e114cc4b7edfbafe274c17493e2"],
    ["https://static.baobaobooks.net/dist/a33b9fd4aeb713bd042e.js", "52eb14773625cc6f7a88244d4ec4c51d"],
    ["https://static.baobaobooks.net/dist/a41d9333cfdf35f00f5a.js", "872ae306f78e8f98aefdef15f00d4596"],
    ["https://static.baobaobooks.net/dist/a5ea04742807cfb05b2f.js", "5ff3b4a81ab558ea5a5fca9d89abaeda"],
    ["https://static.baobaobooks.net/dist/b8d62f3bf6b347a3929d.js", "4ff5d509e3659a032a35032fbcdf3016"],
    ["https://static.baobaobooks.net/dist/b8f7cd104e679b2d0e99.css", "2deeb38a111752816d0d1d36b8f21764"],
    ["https://static.baobaobooks.net/dist/b8f7cd104e679b2d0e99.js", "7df0d7ef087f13f06c34784a16655a06"],
    ["https://static.baobaobooks.net/dist/bb89a3a736c7d6fdabf2.js", "ba49d63849f0dd28c4a8b29c5d29fc62"],
    ["https://static.baobaobooks.net/dist/c580091164553a377e81.js", "efe1774fdd570fe092b5705926d867d3"],
    ["https://static.baobaobooks.net/dist/c6020a0.png", "c6020a020e50f4cb3a29a4450946db98"],
    ["https://static.baobaobooks.net/dist/cad2786e0f02494dd9bb.js", "6b556ecec4aca8ec054923fa5f5584a1"],
    ["https://static.baobaobooks.net/dist/d358b6e.png", "d358b6edac155c018ef4b523164763e9"],
    ["https://static.baobaobooks.net/dist/d60a5c9725af34409574.js", "1ffb90e1135a1d1066f9d96245678bf3"],
    ["https://static.baobaobooks.net/dist/d6502a1a44c54af623e6.js", "1543d0c81a98a306c3dd073b20ec14a1"],
    ["https://static.baobaobooks.net/dist/d79dc0e7e626906e17b2.js", "002da5365bf590337d089e210feba2e0"],
    ["https://static.baobaobooks.net/dist/e0baef76649f08ff751a.js", "13aeebe8833a3a6c406bfcec8d503055"],
    ["https://static.baobaobooks.net/dist/e1969ccccb9ab47a4314.js", "7059498adbeecdf475796d33c1d6f1ad"],
    ["https://static.baobaobooks.net/dist/e2d596d.png", "e2d596de2414edc731e40ff1a6ea4b4d"],
    ["https://static.baobaobooks.net/dist/f32c53513a9b0a43a57d.js", "12c3f3a3217db2996af2b3179b3bd74e"],
    ["https://static.baobaobooks.net/dist/f349dbf1c571dc254d76.js", "b1ca64440875ba870231585c6cf5df87"],
    ["https://static.baobaobooks.net/dist/f63e604266761f9310af.js", "de006841ad3fe4b4f3c66f3ae52caf49"],
    ["https://static.baobaobooks.net/dist/f659296c8521d3d77ebe.js", "4580db5a425deb999ff1c0e482b77016"],
    ["https://static.baobaobooks.net/dist/f677347af88742816acd.js", "dfbb2b27e6f5946899d66c567a6b70c9"],
    ["https://static.baobaobooks.net/dist/f7553b65212b955e9e21.js", "043f6c47f77671d3449d07b2ec2acdfd"],
    ["https://static.baobaobooks.net/dist/f88251d.png", "f88251d9c64c8359953626486c190a73"],
    ["https://static.baobaobooks.net/dist/favicon.ico", "0038735dddc4f118444efb6a96bab42c"],
    ["https://static.baobaobooks.net/dist/fc3880e6b5654f98c571.js", "962ff3c0de6e360269d679c936de640b"]
  ],
  cacheName = "sw-precache-v3-shop-mobile-" + (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(t, a) {
    var e = new URL(t);
    return "/" === e.pathname.slice(-1) && (e.pathname += a),
      e.toString()
  },
  cleanResponse = function(t) {
    return t.redirected ? ("body" in t ? Promise.resolve(t.body) : t.blob()).then(function(a) {
      return new Response(a, {
        headers: t.headers,
        status: t.status,
        statusText: t.statusText
      })
    }) : Promise.resolve(t)
  },
  createCacheKey = function(t, a, e, s) {
    var b = new URL(t);
    return s && b.pathname.match(s) || (b.search += (b.search ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(e)),
      b.toString()
  },
  isPathWhitelisted = function(t, a) {
    if (0 === t.length)
      return !0;
    var e = new URL(a).pathname;
    return t.some(function(t) {
      return e.match(t)
    })
  },
  stripIgnoredUrlParameters = function(t, a) {
    var e = new URL(t);
    return e.hash = "",
      e.search = e.search.slice(1).split("&").map(function(t) {
        return t.split("=")
      }).filter(function(t) {
        return a.every(function(a) {
          return !a.test(t[0])
        })
      }).map(function(t) {
        return t.join("=")
      }).join("&"),
      e.toString()
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(precacheConfig.map(function(t) {
    var a = t[0],
      e = t[1],
      s = new URL(a, self.location),
      b = createCacheKey(s, hashParamName, e, /./);
    return [s.toString(), b]
  }));
self.addEventListener("install", function(t) {
  t.waitUntil(caches.open(cacheName).then(function(t) {
    return setOfCachedUrls(t).then(function(a) {
      return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e) {
        if (!a.has(e)) {
          var s = new Request(e, {
            credentials: "same-origin"
          });
          return fetch(s).then(function(a) {
            if (!a.ok)
              throw new Error("Request for " + e + " returned a response with status " + a.status);
            return cleanResponse(a).then(function(a) {
              return t.put(e, a)
            })
          })
        }
      }))
    })
  }).then(function() {
    return self.skipWaiting()
  }))
}),
  self.addEventListener("activate", function(t) {
    var a = new Set(urlsToCacheKeys.values());
    t.waitUntil(caches.open(cacheName).then(function(t) {
      return t.keys().then(function(e) {
        return Promise.all(e.map(function(e) {
          if (!a.has(e.url))
            return t.delete(e)
        }))
      })
    }).then(function() {
      return self.clients.claim()
    }))
  }),
  self.addEventListener("fetch", function(t) {
    if ("GET" === t.request.method) {
      var a, e = stripIgnoredUrlParameters(t.request.url, ignoreUrlParametersMatching);
      (a = urlsToCacheKeys.has(e)) || (e = addDirectoryIndex(e, "index.html"),
        a = urlsToCacheKeys.has(e));
      a && t.respondWith(caches.open(cacheName).then(function(t) {
        return t.match(urlsToCacheKeys.get(e)).then(function(t) {
          if (t)
            return t;
          throw Error("The cached response that was expected is missing.")
        })
      }).catch(function(a) {
        return console.warn('Couldn\'t serve response for "%s" from cache: %O', t.request.url, a),
          fetch(t.request)
      }))
    }
  });
