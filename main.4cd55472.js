parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t=document.querySelector(".spider"),e=document.querySelector(".wall"),l=e.getBoundingClientRect();document.addEventListener("click",function(o){var n=o.clientY-(t.height/2+10)<l.top||o.clientY<l.top+parseInt(getComputedStyle(e).border),i=o.clientY+(t.height/2+10)>l.bottom||o.clientY>l.bottom-parseInt(getComputedStyle(e).border),c=o.clientX<l.left+parseInt(getComputedStyle(e).border)||o.clientX-t.width/2<l.left,r=o.clientX>l.right+parseInt(getComputedStyle(e).border)||o.clientX+t.width/2>l.right;n||i?n?t.style.top=0:i&&(t.style.top="".concat(parseInt(getComputedStyle(e).height)-t.height,"px")):t.style.top="".concat(o.clientY-e.offsetTop-(t.height/2+12),"px"),c||r?c?t.style.left=0:r&&(t.style.left="".concat(parseInt(getComputedStyle(e).width)-t.width,"px")):t.style.left="".concat(o.clientX-e.offsetLeft-(t.width/2+7),"px")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.4cd55472.js.map