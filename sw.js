if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const a=s=>n(s,r),u={module:{uri:r},exports:o,require:a};e[r]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(l(...s),o)))}}define(["./workbox-32a34f02"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"192.png",revision:"79b41c7674571b2eca6676861a2b9f62"},{url:"256.png",revision:"62a51aa487dc4f10641599f4112b6477"},{url:"512.png",revision:"9157826bd9fb65c48157ee983f49c586"},{url:"assets/atc.09cec0ab.png",revision:null},{url:"assets/download_icon.34219614.svg",revision:null},{url:"assets/ekovoz.af7d8a74.png",revision:null},{url:"assets/fork_icon.679c29f0.svg",revision:null},{url:"assets/index.2c536ac4.css",revision:null},{url:"assets/index.3d6ddcd7.js",revision:null},{url:"assets/location-arrow-solid.4871ebf4.svg",revision:null},{url:"assets/measurement_icon.cf8e36c5.svg",revision:null},{url:"assets/msg-air.abb754d3.js",revision:null},{url:"assets/msg-alert.804a179c.png",revision:null},{url:"assets/msg-alert.9404c396.js",revision:null},{url:"assets/msg-fire.faa011b0.js",revision:null},{url:"assets/msg-forest.a623a1f9.js",revision:null},{url:"assets/msg-gank.34a748fe.js",revision:null},{url:"assets/msg-gank.ef47b6e4.png",revision:null},{url:"assets/msg-garbage.b797b882.js",revision:null},{url:"assets/msg-notif.d72c5a6f.js",revision:null},{url:"assets/msg-notif.fbcb8f30.png",revision:null},{url:"assets/msg-parking.5da4fdeb.js",revision:null},{url:"assets/msg-parking.78bf40b4.png",revision:null},{url:"assets/msg-recycle.2ff7eefc.png",revision:null},{url:"assets/msg-recycle.eab79c00.js",revision:null},{url:"assets/msg-text.470fee8d.js",revision:null},{url:"assets/msg-water.b0066085.js",revision:null},{url:"assets/neutral_icon.32a0690f.svg",revision:null},{url:"assets/notosans-bold-webfont.b1ab6654.woff2",revision:null},{url:"assets/notosans-regular-webfont.7d4a5d04.woff2",revision:null},{url:"assets/plus_icon.06857aac.svg",revision:null},{url:"assets/question_icon.d8f75707.svg",revision:null},{url:"assets/smile_icon.73fd6f69.svg",revision:null},{url:"assets/spinner-solid.7debe01f.svg",revision:null},{url:"assets/sun.d26ef6d1.png",revision:null},{url:"assets/temp_icon.b1f3170e.svg",revision:null},{url:"assets/theme_icon.b3aabb99.svg",revision:null},{url:"assets/theme-switcher.837a1f8c.svg",revision:null},{url:"assets/upset_icon.964b9fc3.svg",revision:null},{url:"favicon.ico",revision:"bce0d05faf247521df789e2343a107d1"},{url:"icon512_rounded.png",revision:"fb6ac499cea7f707a9c090e8772d6e8f"},{url:"index.html",revision:"bc484466246760160589919118fab674"},{url:"maskable-icon.png",revision:"bfa06e358de8f35c5fd6471b98df112e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"sensors-cy-app.png",revision:"44b8a0ab5ee50ac8f3eaa2aef6d338cb"},{url:"maskable-icon.png",revision:"bfa06e358de8f35c5fd6471b98df112e"},{url:"icon512_rounded.png",revision:"fb6ac499cea7f707a9c090e8772d6e8f"},{url:"512.png",revision:"9157826bd9fb65c48157ee983f49c586"},{url:"256.png",revision:"62a51aa487dc4f10641599f4112b6477"},{url:"192.png",revision:"79b41c7674571b2eca6676861a2b9f62"},{url:"manifest.webmanifest",revision:"015d28e1f3007ef6851d2db9d1de806a"}],{}),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));