if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>n(e,l),u={module:{uri:l},exports:o,require:a};s[l]=Promise.all(i.map((e=>u[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-32a34f02"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app-icon-120.png",revision:"ed33837fa042b725590fde3fe8c86bc5"},{url:"app-icon-192.png",revision:"99fdc63826bee0d9dfa81dbdde81593b"},{url:"app-icon-256.png",revision:"d8aa3b549b97e999d07ec2bce0b351a7"},{url:"app-icon-512-rounded.png",revision:"67c9eb98339ee497d04f7c8f76ce66c7"},{url:"app-icon-512.png",revision:"e395e111321876ac227cd8ca945111d0"},{url:"assets/app-icon-512.a5eb7b3f.png",revision:null},{url:"assets/atc.09cec0ab.png",revision:null},{url:"assets/ekovoz.af7d8a74.png",revision:null},{url:"assets/index.93159c52.css",revision:null},{url:"assets/msg-air.abb754d3.js",revision:null},{url:"assets/msg-alert.804a179c.png",revision:null},{url:"assets/msg-alert.9404c396.js",revision:null},{url:"assets/msg-fire.faa011b0.js",revision:null},{url:"assets/msg-forest.a623a1f9.js",revision:null},{url:"assets/msg-gank.34a748fe.js",revision:null},{url:"assets/msg-gank.ef47b6e4.png",revision:null},{url:"assets/msg-garbage.b797b882.js",revision:null},{url:"assets/msg-notif.d72c5a6f.js",revision:null},{url:"assets/msg-notif.fbcb8f30.png",revision:null},{url:"assets/msg-parking.5da4fdeb.js",revision:null},{url:"assets/msg-parking.78bf40b4.png",revision:null},{url:"assets/msg-recycle.2ff7eefc.png",revision:null},{url:"assets/msg-recycle.eab79c00.js",revision:null},{url:"assets/msg-text.470fee8d.js",revision:null},{url:"assets/msg-water.b0066085.js",revision:null},{url:"assets/notosans-bold-webfont.b1ab6654.woff2",revision:null},{url:"assets/notosans-regular-webfont.7d4a5d04.woff2",revision:null},{url:"assets/notosansdisplay-black-webfont.9f247781.woff2",revision:null},{url:"assets/notosansdisplay-medium-webfont.5dca4cb1.woff2",revision:null},{url:"assets/polkadot.ba662d9a.png",revision:null},{url:"assets/sensors-cy-app.b2b52e72.png",revision:null},{url:"assets/sun.d26ef6d1.png",revision:null},{url:"assets/webzero.f2278069.png",revision:null},{url:"favicon.ico",revision:"8e319c9cafb31249891540cd51c6e8a0"},{url:"index.html",revision:"dc88d9ecbdb8d2a6217493dd7ee3df5c"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"sensors-cy-app.png",revision:"44b8a0ab5ee50ac8f3eaa2aef6d338cb"},{url:"untitled folder/192.png",revision:"79b41c7674571b2eca6676861a2b9f62"},{url:"untitled folder/256.png",revision:"62a51aa487dc4f10641599f4112b6477"},{url:"untitled folder/512.png",revision:"9157826bd9fb65c48157ee983f49c586"},{url:"untitled folder/icon512_rounded.png",revision:"fb6ac499cea7f707a9c090e8772d6e8f"},{url:"untitled folder/maskable-icon.png",revision:"bfa06e358de8f35c5fd6471b98df112e"},{url:"untitled folder/sensors-world-app.png",revision:"4080ed30224bdbd4648ca4ab3f8819fe"},{url:"app-icon-512.png",revision:"e395e111321876ac227cd8ca945111d0"},{url:"app-icon-512-rounded.png",revision:"67c9eb98339ee497d04f7c8f76ce66c7"},{url:"app-icon-256.png",revision:"d8aa3b549b97e999d07ec2bce0b351a7"},{url:"app-icon-192.png",revision:"99fdc63826bee0d9dfa81dbdde81593b"},{url:"manifest.webmanifest",revision:"45e65369f28e7009ef8228020f69e5e2"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
