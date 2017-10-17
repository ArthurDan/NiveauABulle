/**
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
'License'); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

// Note, these will be updated automatically at build time
var CACHE_VERSION = '1508248889249';
var CACHE_LIST = [
    "/config.xml",
    "/cordova-sw.js",
    "/cordova.js",
    "/cordova_plugins.js",
    "/css/data.css",
    "/css/index.css",
    "/css/style.css",
    "/favicon.ico",
    "/img/logo.png",
    "/index.html",
    "/js/index.js",
    "/js/lib/bootstrap.js",
    "/js/lib/bootstrap.min.js",
    "/js/lib/jquery-1.11.1.min.js",
    "/js/lib/jquery-3.2.1.min.js",
    "/js/lib/jquery.mobile-1.4.5.min.js",
    "/js/lib/popper.min.js",
    "/manifest.json",
    "/plugins/cordova-plugin-device-motion/src/browser/AccelerometerProxy.js",
    "/plugins/cordova-plugin-device-motion/www/Acceleration.js",
    "/plugins/cordova-plugin-device-motion/www/accelerometer.js"
];

this.addEventListener('install', function (event) {
    // Perform install steps
    console.log('cordova service worker is installing.');
    event.waitUntil(caches.open(CACHE_VERSION) /* eslint no-undef : 0 */
        .then(function (cache) {
            return cache.addAll(CACHE_LIST);
        }));
});

this.addEventListener('activate', function (event) {
    // Perform activate steps
    console.log('cordova service worker is activated.');
});

this.addEventListener('fetch', function (event) {
    console.log('cordova service worker : fetch : ' + event.request.url);

    event.respondWith(caches.match(event.request).then(function (response) { /* eslint no-undef : 0 */
        // Cache hit? return response else fetch it
        return response || fetch(event.request); /* eslint no-undef : 0 */
    }));
});
