(()=>{var e={424:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(15),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,".card-header {\n    background-color: rgba(163, 121, 99, 0.75);\n}\n.card-body {\n    background-color: rgba(245, 245, 245, 0.55);\n    \n}\n.card-footer {\n    background-color: rgba(245, 245, 245, 0.7);\n}","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;IACI,0CAA0C;AAC9C;AACA;IACI,2CAA2C;;AAE/C;AACA;IACI,0CAA0C;AAC9C",sourcesContent:[".card-header {\n    background-color: rgba(163, 121, 99, 0.75);\n}\n.card-body {\n    background-color: rgba(245, 245, 245, 0.55);\n    \n}\n.card-footer {\n    background-color: rgba(245, 245, 245, 0.7);\n}"],sourceRoot:""}]);const l=c},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var l=0;l<e.length;l++){var i=[].concat(e[l]);o&&r[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),t.push(i))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}e.exports=function(e){var n,o,r=(o=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(o=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}return n}}(n,o)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[1],c=r[3];if("function"==typeof btoa){var l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),s="/*# ".concat(i," */"),d=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[a].concat(d).concat([s]).join("\n")}return[a].join("\n")}},245:(e,t,n)=>{e.exports=n.p+"d1c0401a07ab8cbae3642ff24e4facf5.png"},566:(e,t,n)=>{e.exports=n.p+"16218df669acd695ec2fee1c4d808218.png"},379:(e,t,n)=>{"use strict";var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var l=e[r],i=t.base?l[0]+t.base:l[0],s=n[i]||0,d="".concat(i," ").concat(s);n[i]=s+1;var u=c(d),m={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(a[u].references++,a[u].updater(m)):a.push({identifier:d,updater:g(m,t),references:1}),o.push(d)}return o}function i(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=n.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=r(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function m(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,y=0;function g(e,t){var n,o,r;if(t.singleton){var a=y++;n=f||(f=i(t)),o=u.bind(null,n,a,!1),r=u.bind(null,n,a,!0)}else n=i(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);a[r].references--}for(var i=l(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",(()=>{"use strict";var e=n(379),t=n.n(e),o=n(424);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;class r{constructor(e){this.type=e}get(){return parseFloat(localStorage.getItem("Wallet_"+this.type)||"0")}add(e){const t=this.get();return this.set(t+(e||1)),this.get()}set(e){localStorage.setItem("Wallet_"+this.type,e.toString())}tryRemove(e){const t=this.get();return t>=e&&(this.set(t-e),!0)}}const a=new r("Scrap"),c=new r("Pickaxe"),l=new r("Scavenger"),i=new r("Backpack"),s=new r("Foundry"),d=new r("Refinery"),u=new r("Metal"),m=new r("Plastic"),f=new r("Recycler"),y=new r("Smelter"),g=new r("Drill"),p=new r("DrillHead"),C=new r("Crystal"),h=new r("ScrapUsers");var I,v=n(566),E=n.n(v),S=n(245),B=n.n(S);const b=document.getElementById("FoundryToggleIMG"),k=document.getElementById("MetalPerSecond"),x=document.getElementById("PlasticToggleIMG");var T;const M=document.getElementById("PlasticPerSecond"),L=1e5,H=document.getElementById("CrystalPerSecond"),R=document.getElementById("CrystalScrapPerSecond");let A,w,F,N;new class{constructor(){document.getElementById("PlayerGather").addEventListener("click",(()=>this.onClickPlayerGather())),document.getElementById("BuyPick").addEventListener("click",(()=>this.onClickBuyPickaxe()))}onClickPlayerGather(){a.add(1.5*c.get()+1),this.updateInterface&&this.updateInterface()}onClickBuyPickaxe(){a.tryRemove(100)&&(c.add(),this.updateInterface&&this.updateInterface())}RESET(){localStorage.clear(),c.add(500),l.add(98),this.updateInterface&&this.updateInterface()}},document.addEventListener("keydown",(e=>{"Enter"===e.key&&e.preventDefault()})),A=new class{constructor(){document.getElementById("BuyFoundry").addEventListener("click",(()=>this.onClickBuyFoundry())),document.getElementById("BuyRefinery").addEventListener("click",(()=>this.onClickBuyRefinery())),document.getElementById("FoundryToggle").addEventListener("click",(()=>this.onFoundryToggle()))}onFoundryToggle(){1==I?(I=!1,h.tryRemove(1)):(I=!0,h.add(1))}checkButton(){b instanceof HTMLImageElement&&(b.src=I?E():B())}onClickBuyFoundry(){a.tryRemove(this.FoundryCost())&&s.add()}FoundryCost(){return 1e4*(1.15*s.get()||1)}onClickBuyRefinery(){a.tryRemove(this.RefineryCost())&&d.add()}RefineryCost(){return 1e4*(1.15*s.get()||1)}run(e){if(I){if(s.get()>=1){const t=a.get()/h.get(),n=s.get(),o=t/1e3,r=d.get(),c=Math.floor(e/1e3*n*(1.15*(r||1)));t>1500&&(Math.floor(o)<=c?a.tryRemove(1e3*o)&&(u.add(o),k instanceof HTMLSpanElement&&(k.textContent=Intl.NumberFormat().format(o))):a.tryRemove(1e3*c)&&(u.add(c),k instanceof HTMLSpanElement&&(k.textContent=Intl.NumberFormat().format(c))))}return this.checkButton(),{UpdateInterface:!0}}return this.checkButton(),k instanceof HTMLSpanElement&&(k.textContent=Intl.NumberFormat().format(0)),{UpdateInterface:!1}}UpdateInterface(){const e=document.querySelectorAll(".Metal"),t=document.getElementById("Foundry"),n=document.getElementById("Cost_Foundry"),o=document.getElementById("Refinery"),r=document.getElementById("Cost_Refinery");for(const t of e)t.textContent=Intl.NumberFormat().format(u.get());t instanceof HTMLSpanElement&&(t.textContent=s.get().toString()),n instanceof HTMLSpanElement&&(n.textContent=Intl.NumberFormat().format(this.FoundryCost())),o instanceof HTMLSpanElement&&(o.textContent=d.get().toString()),r instanceof HTMLSpanElement&&(r.textContent=Intl.NumberFormat().format(this.RefineryCost()))}},w=new class{constructor(){document.getElementById("HireScavenger").addEventListener("click",(()=>this.onClickHireScavenger())),document.getElementById("BuyBackpack").addEventListener("click",(()=>this.onClickBuyBackpack()))}onClickHireScavenger(){const e=500*(.15*l.get()||1);a.tryRemove(e)&&l.add()}onClickBuyBackpack(){i.get()<l.get()&&a.tryRemove(500)&&i.add()}BackpackCost(){return 500*(.15*i.get()||1)}ScavengerCost(){return 500*(.15*l.get()||1)}run(e){if(0!=l.get()){const t=l.get(),n=i.get();0!=n&&i.get();let o=e/1e3*t*(1.5*n);a.add(o);const r=document.getElementById("ScrapPerSecond");r instanceof HTMLSpanElement&&(r.textContent=Intl.NumberFormat().format(o))}return{UpdateInterface:!0}}UpdateInterface(){const e=document.querySelectorAll(".BankAccountCount"),t=document.getElementById("Pickaxes"),n=document.getElementById("Cost_Pickaxe"),o=document.getElementById("KlickSecond"),r=document.getElementById("Scavenger"),s=document.getElementById("Cost_Scavenger"),d=document.getElementById("Backpack"),u=document.getElementById("Cost_ScavengerBackpack");for(const t of e)t.textContent=Intl.NumberFormat().format(a.get());if(o instanceof HTMLSpanElement){const e=Intl.NumberFormat().format(1.5*c.get()+1);o.textContent=e.toString()}t instanceof HTMLSpanElement&&(t.textContent=c.get().toString()),n instanceof HTMLSpanElement&&(n.textContent="100"),r instanceof HTMLSpanElement&&(r.textContent=l.get().toString()),d instanceof HTMLSpanElement&&(d.textContent=i.get().toString()),u instanceof HTMLSpanElement&&(u.textContent=Intl.NumberFormat().format(this.BackpackCost())),s instanceof HTMLSpanElement&&(s.textContent=Intl.NumberFormat().format(this.ScavengerCost()))}},F=new class{constructor(){document.getElementById("BuyRecycler").addEventListener("click",(()=>this.onClickBuyRecycler())),document.getElementById("BuySmelter").addEventListener("click",(()=>this.onClickBuySmelter())),document.getElementById("PlasticToggle").addEventListener("click",(()=>this.onPlasticToggle()))}onPlasticToggle(){1==T?(T=!1,h.tryRemove(1)):(T=!0,h.add(1))}checkButton(){x instanceof HTMLImageElement&&(x.src=T?E():B())}onClickBuyRecycler(){a.tryRemove(this.RecyclerCost())&&f.add()}RecyclerCost(){return 500*(1.15*f.get()||1)}onClickBuySmelter(){a.tryRemove(this.SmelterCost())&&y.add()}SmelterCost(){return 500*(1.15*y.get()||1)}run(e){if(T){if(f.get()>=1){const t=a.get()/h.get(),n=f.get(),o=t/1e3,r=y.get(),c=Math.floor(e/1e3*n*(1.15*(r||1)));t>1500&&(Math.floor(o)<=c?a.tryRemove(1e3*o)&&(m.add(o),M instanceof HTMLSpanElement&&(M.textContent=Intl.NumberFormat().format(o))):a.tryRemove(1e3*c)&&(m.add(c),M instanceof HTMLSpanElement&&(M.textContent=Intl.NumberFormat().format(c))))}return this.checkButton(),{UpdateInterface:!0}}return this.checkButton(),M instanceof HTMLSpanElement&&(M.textContent=Intl.NumberFormat().format(0)),{UpdateInterface:!1}}UpdateInterface(){const e=document.querySelectorAll(".Plastic"),t=document.getElementById("Recycler"),n=document.getElementById("Cost_Recycler"),o=document.getElementById("Smelter"),r=document.getElementById("Cost_Smelter");for(const t of e)t.textContent=Intl.NumberFormat().format(m.get());t instanceof HTMLSpanElement&&(t.textContent=f.get().toString()),o instanceof HTMLSpanElement&&(o.textContent=y.get().toString()),n instanceof HTMLSpanElement&&(n.textContent=Intl.NumberFormat().format(this.RecyclerCost())),r instanceof HTMLSpanElement&&(r.textContent=Intl.NumberFormat().format(this.SmelterCost()))}},N=new class{constructor(){document.getElementById("BuyDeepDrill").addEventListener("click",(()=>this.onClickBuyDrill())),document.getElementById("BuyDrillHead").addEventListener("click",(()=>this.onClickBuyDrillHead()))}onClickBuyDrill(){u.tryRemove(this.DrillCost())&&g.add()}DrillCost(){return L*(1.15*g.get()||1)}onClickBuyDrillHead(){u.tryRemove(this.DrillHeadCost())&&p.add()}DrillHeadCost(){return L*(1.15*p.get()||1)}run(e){if(0!=g.get()){let t=1;const n=g.get();0!=g.get()&&p.get();const o=e/1e3*n*(1.5*t)/2.5,r=e/1e3*n*(1.5*t)*75e3;a.add(o),C.add(r),H instanceof HTMLSpanElement&&(H.textContent=Intl.NumberFormat().format(2*o)),R instanceof HTMLSpanElement&&(R.textContent=Intl.NumberFormat().format(2*r))}return{UpdateInterface:!0}}UpdateInterface(){const e=document.querySelectorAll(".Crystal"),t=document.getElementById("Drill"),n=document.getElementById("Cost_DeepDrill"),o=document.getElementById("DrillHead"),r=document.getElementById("Cost_DrillHead");for(const t of e)t.textContent=Intl.NumberFormat().format(C.get());t instanceof HTMLSpanElement&&(t.textContent=g.get().toString()),o instanceof HTMLSpanElement&&(o.textContent=p.get().toString()),n instanceof HTMLSpanElement&&(n.textContent=Intl.NumberFormat().format(this.DrillCost())),r instanceof HTMLSpanElement&&(r.textContent=Intl.NumberFormat().format(this.DrillHeadCost()))}};const D=[w,A,F,N];let P=(new Date).getTime();const U=function(){let e=!1;const t=(new Date).getTime(),n=t-P;try{for(const t of D)t.run(n).UpdateInterface&&(e=!0);if(e){for(const e of D)e.UpdateInterface();!function(){const e=document.getElementById("metalhide"),t=document.getElementById("plastichide");l.get()>=100?(e.style.display="block",t.style.display="block"):(e.style.display="none",t.style.display="none")}()}}finally{P=t,setTimeout(U,500)}};U()})()})();
//# sourceMappingURL=bundle.38fa0b99b8ca78ad7dd3.js.map