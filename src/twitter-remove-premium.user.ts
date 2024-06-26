// ==UserScript==
// @name         Twitter: Remove 'Premium'
// @namespace    https://github.com/ansanloms/tampermonkey-scripts
// @version      0.0.3
// @description  Premium へのリンクを削除する。
// @author       ansanloms
// @match        https://x.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ansanloms/tampermonkey-scripts/main/scripts/twitter-remove-premium.user.js
// @downloadURL  https://raw.githubusercontent.com/ansanloms/tampermonkey-scripts/main/scripts/twitter-remove-premium.user.js
// ==/UserScript==

(() => {
  const style = document.createElement("style");

  style.innerText = `
    [aria-label="Premium"]
    {
      display: none !important;
    }
  `;

  document.getElementsByTagName("head").item(0)?.appendChild(style);
})();
