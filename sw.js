if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let o={};const t=e=>s(e,c),l={module:{uri:c},exports:o,require:t};n[c]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DgQ9PxtK.js",revision:null},{url:"assets/index-MOWxslsL.css",revision:null},{url:"index.html",revision:"91a5b909f33d559f2c2cc7140f69e907"},{url:"registerSW.js",revision:"ef3a26293a8b1b1a2a322024ae07f0a7"},{url:"192x192Icon.png",revision:"10c67f866525f87995be4c7c4af48339"},{url:"512x512Icon.png",revision:"4b8daab92b32848ac8c44b41ce99ed36"},{url:"Screenshot1280x720.png",revision:"7fa64cc1584e663570bbda73c3045794"},{url:"Screenshot640x1136.png",revision:"785a25c638200dc4a3ce0be408985bf9"},{url:"manifest.webmanifest",revision:"eddbf8e9ac0091fb3ecf182ecc8a1401"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));