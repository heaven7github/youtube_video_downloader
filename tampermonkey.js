// ==UserScript==
// @name        Youtube download
// @author      Lóri
// @namespace   com.googlifix
// @include     https://www.youtube.com/*
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// @version     27
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// ==/UserScript==

(function() {
    $(document).ready(function() {
        var newHTML         = document.createElement ('span');
        newHTML.innerHTML   = '<a target=\'_blank\' href=\'http://localhost/youtube.php?yt_id='+document.location.href+'\'>Video letöltése telefonra</a>';$('.watch-title-container').after(newHTML);

    });
})();