// ==UserScript==
// @name         paste-on-chatgpt
// @namespace    paste-on-chatgpt
// @version      1.1.2
// @description  paste-on-chatgpt
// @author       pasteOnChatGPT
// @match        https://chatgpt.com/*
// @license      MIT
// @homepage     https://github.com/pasteOnChatGPT/paste-on-chatgpt
// @updateURL    https://openuserjs.org/meta/pasteOnChatGPT/paste-on-chatgpt.meta.js
// @grant        none
// ==/UserScript==
(()=>{const e=setInterval((()=>{document.getElementById("prompt-textarea")&&(clearInterval(e),t())}),1e3),t=()=>{document.body.addEventListener("paste",(async t=>{t.preventDefault(),t.stopPropagation();const n=t.target;if("TEXTAREA"===n.tagName){const t=await navigator.clipboard.readText();if(!t)return;n.focus(),e(t,n)}}));const e=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,a=0;const o=()=>{if(a<e.length){const r=e[a],s={keyCode:r.charCodeAt(0),bubbles:!0};t.dispatchEvent(new KeyboardEvent("keypress",s)),t.value+=r,a++,setTimeout(o,n)}};o()}}})();
