// ==UserScript==
// @name          Get Data from Steam / SteamDB
// @namespace     sak32009-gaxvyvrguokgtog
// @version       4.6.1
// @author        Sak32009 (https://sak32009.github.io/)
// @description   Get Data from Steam / SteamDB (ex Get DLC Info from SteamDB) is a userscript that extracts all data needed to generate DLCs formats and depot.sha1 for Steam games.
// @license       MIT
// @homepage      https://github.com/Sak32009/GetDLCInfoFromSteamDB/
// @homepageURL   https://github.com/Sak32009/GetDLCInfoFromSteamDB/
// @source        github:Sak32009/GetDLCInfoFromSteamDB
// @supportURL    https://github.com/Sak32009/GetDLCInfoFromSteamDB/issues/
// @downloadURL   https://raw.githack.com/Sak32009/GetDLCInfoFromSteamDB/master/dist/sak32009-get-data-from-steam-steamdb.meta.js
// @updateURL     https://raw.githack.com/Sak32009/GetDLCInfoFromSteamDB/master/dist/sak32009-get-data-from-steam-steamdb.user.js
// @match         *://steamdb.info/app/*
// @match         *://steamdb.info/depot/*
// @match         *://store.steampowered.com/app/*
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.bundle.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/sprintf/1.1.2/sprintf.min.js
// @require       data:application/javascript,window.sprintfjs%3D%7Bsprintf%3Awindow.sprintf%7D%3B
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       data:application/javascript,window.lodash%3Dwindow._%3B
// @grant         unsafeWindow
// @updatedAT     Tue, 03 Jan 2023 12:00:53 GMT
// ==/UserScript==