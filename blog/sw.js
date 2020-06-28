/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/27/01-仿微博导航条/index.html","f41c5c0d7f3a07923bef9011a05ffa56"],["/2019/06/28/03-Flutter之drawer详细分析/index.html","52819372dc132bceefd9984c5bc36a38"],["/2019/08/16/Flutter：Slivers大家族/index.html","cfb61367f7136a984acae75f63bfed94"],["/2019/08/17/Dart：List的属性和方法实例/index.html","7a195de4caf68a4a9379eaebd1fb26f2"],["/2019/08/17/Dart：Map的属性和方法实例/index.html","00b552c4e3954c11d149a91b47d6396e"],["/2019/08/17/Dart：类/index.html","dd1a77fb6878b5e92f134a8091680e0c"],["/2019/08/17/Flutter：Image/index.html","2d0fe0ef681e842d6b51ee679d98d6a1"],["/2019/08/17/Flutter：Text/index.html","73e98e79cbc5189fe666d139a404eef4"],["/2019/09/11/Flutter：Icon/index.html","9c625655461331ae6d347b9db293b248"],["/2019/09/11/Flutter：TextField/index.html","d475013602182a11c0509dfc0c06d10b"],["/about/index.html","6d6ff14ac4de201b31ef50bdf0cfadf4"],["/archives/2019/06/index.html","3b6205a66c16f08f8a9e3ffbf36522a6"],["/archives/2019/08/index.html","9744d02a2ef4611843832dfee0c92b30"],["/archives/2019/09/index.html","70221f7f33e581bab2941940352a74e5"],["/archives/2019/index.html","b058d52ae1f8bde9352b50159a71a3c8"],["/archives/index.html","121e74f3f7122d19ebef5714a1086045"],["/categories/Android/index.html","76aeba312469de107dafb4902d101256"],["/categories/Flutter/Dart/index.html","0d67091e1a2192db4f6abd12d99fabcc"],["/categories/Flutter/index.html","a144958eb829bb7e145886be4877090d"],["/categories/index.html","fe48e4cd1678400c9d1342ee4542927b"],["/css/main.css","ea0842f56213ff9b9987d8252e4405c5"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","2d20a2a8c2ef8193cf48f4a7c759bab6"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/article_bg.jpg","7d43c8e1c883ebd7091313aebf7937d7"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/avatar.jpg","2ceca4ae3a9af6d8f5cb3fa7bb133495"],["/images/bg.jpg","8515533b6a4d5da51687de3264ddcc8b"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/menus_bg1.jpg","41cbd0219ff08b941d7ef8f4fa55f87d"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/images/wechatpay.png","717ebfd7ebf1991eb69b501e8e118ff2"],["/index.html","7e325e6e9a5ffb04dc59bdf60321fce7"],["/js/affix.js","b63086f05d92b14adae93a2f3e80be74"],["/js/algolia-search.js","2425320febc293b9d36b8e5bb07e90a5"],["/js/exturl.js","3b41a52ce2f452fe0c9d32a9cbfe8cf2"],["/js/js.cookie.js","8b2f29a092369c903deabdb2ed82ce4a"],["/js/motion.js","e702a015f19d06079a862829994a23c1"],["/js/next-boot.js","ea430c4edd5ee5426c885045d95f5d89"],["/js/post-details.js","5dc53412bb3d996fc0452502518f1dc0"],["/js/schemes/muse.js","4eacf8b56b3c19200191b52baa14b339"],["/js/schemes/pisces.js","821778fe0bbd712c7fe400b7bf0163a1"],["/js/scroll-cookie.js","39f6f75889d3b23f15fa75d7e214f247"],["/js/scrollspy.js","7491531ac09d68f0844c4d6da71c2100"],["/js/src/clicklove.js","6566f96fba710ac1f3e357146298aa44"],["/js/src/clipboard-use.js","c5e66b006339b709abdf8e9b5f79ba68"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","6945302cd2196751797de33c3af4a4a6"],["/js/utils.js","8e0eafaddbcdcc1f1dcdd2c7d4f382fd"],["/lib/bookmark/README.html","8b19467e76b6043276fc6e49fdccd172"],["/lib/bookmark/bookmark.min.js","b3d0b76ba186e3a97fd400366a75a4d3"],["/lib/bookmark/index.js","c6a12179b90281058158b012d8a42b06"],["/lib/canvas-nest/README.html","8d02975006de7d08333636ba65dd6495"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/README.html","87cb33e33c767dc5a58437535c443933"],["/lib/canvas-ribbon/canvas-ribbon.js","6f0fb8df7f216338523c4b09de06d5cd"],["/lib/fancybox/README.html","627de9260957c3622d7af40d4010e54a"],["/lib/fancybox/source/jquery.fancybox.css","4dd429d76ab76054650f48079cf3310e"],["/lib/fancybox/source/jquery.fancybox.min.css","a2d42584292f64c5827e8b67b1b38726"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/font-awesome/css/font-awesome.css","0a8e3b06e38a1a997a863297a097a928"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","220afd743d9e9643852e31a135a9f3ae"],["/lib/reading_progress/README.html","017b3c346889f9715f5b25c48e8bb358"],["/lib/reading_progress/reading_progress.js","be373d85c45ac5812e9968044c17e67f"],["/lib/reading_progress/reading_progress.min.js","abbebb6c477b3a170cb6aea8fc2915e9"],["/lib/three/README.html","9a1ea6492c1d48d780268cc16d6531f9"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","d41d8cd98f00b204e9800998ecf8427e"],["/lib/three/lib/CanvasRenderer.js","5593d977c20c4be9bad6860abbf89003"],["/lib/three/lib/Projector.js","24a07d183687a27d65dcaa74d6224573"],["/lib/three/src/canvas_lines.js","07f8aafea78961611fd7fe9b81c9fb39"],["/lib/three/src/canvas_sphere.js","07eed20fc9e78fb4cb1e7f3851997a57"],["/lib/three/src/three-waves.js","8397c4aa2c7a042a995ce8d73e85cab0"],["/lib/three/three-waves.min.js","d40d941c3d1fde7c730f315d1131607d"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.js","6da2bed607769ef28ab4b97a22abfea1"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","bff0ec7bf1d80e1b65d412b9dafb38f1"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","7dbe436ba57963f6d5ff27503a414bb0"],["/sw-register.js","3a0b5d3fe8d3e45917e8b1dfba088ef6"],["/tags/Android/index.html","aaf53fe20ad0e914548dda8d4c48fbe2"],["/tags/Class/index.html","33c8624e7e74fcd391fdb4ac8634db5d"],["/tags/Dart/index.html","575e627632456783a8b450ce0e13a7df"],["/tags/Flutter/index.html","871387014daaa86a1771fbf2954abce9"],["/tags/Icon/index.html","9b67f3ea0e78330c33b7d3d85dd020d8"],["/tags/Image/index.html","708aec76700b2dc8ddc0a5a5574f0976"],["/tags/List/index.html","7d4132d1bbd9f37649b22529ce3f84eb"],["/tags/Map/index.html","33956c4c84b3e3f3e94f6e84560c15ac"],["/tags/Slivers/index.html","986fa8999e968621e8d26c417fb93e57"],["/tags/Text/index.html","6ab5abffa43d62966432f6a9aa51978f"],["/tags/TextField/index.html","fd05462dffbf0f2f126c87d741996f0f"],["/tags/drawer/index.html","70e420a106d8483f0121ccb99a836518"],["/tags/index.html","4623f51e980926aa6a4a83a79117757a"],["/tags/类/index.html","19499049ea2203fe728d24a347befc47"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
