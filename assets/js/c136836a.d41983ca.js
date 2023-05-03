"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,s(s({ref:t},c),{},{components:n})):r.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},s="Popup Menu is cut off in Firefox",a={unversionedId:"menu-in-firefox",id:"menu-in-firefox",title:"Popup Menu is cut off in Firefox",description:"Issue summary",source:"@site/additional/04-knownissues/menu-in-firefox.md",sourceDirName:".",slug:"/menu-in-firefox",permalink:"/additional/knownissues/menu-in-firefox",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java Compile Error",permalink:"/additional/knownissues/java-compile-error"},next:{title:"Microflow missing from list",permalink:"/additional/knownissues/microflow-missing"}},l={},u=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2}],c={toc:u},p="wrapper";function f(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"popup-menu-is-cut-off-in-firefox"},"Popup Menu is cut off in Firefox"),(0,o.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,o.kt)("p",null,"The Popup Menu that is used since MTA 2.0 is not shown correctly when using Firefox."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Popup Menu cut off",src:n(2587).Z,width:"541",height:"316"})),(0,o.kt)("p",null,"MTA will notify users with a red button of this issue after they login. Clicking the button will lead them to the solution described below."),(0,o.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,o.kt)("p",null,"This popup menu is using the ",(0,o.kt)("inlineCode",{parentName:"p"},"has")," selector in CSS.\nThis feature is enabled by default in Chromium browsers, and disabled by default in Firefox.\nMost other browsers do not support the feature."),(0,o.kt)("p",null,"To enable the feature in ",(0,o.kt)("strong",{parentName:"p"},"Firefox"),": "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"about:config")," in your Address bar"),(0,o.kt)("li",{parentName:"ul"},"search for ",(0,o.kt)("inlineCode",{parentName:"li"},"has-selector")," like this:\n",(0,o.kt)("img",{alt:"Has selector",src:n(9087).Z,width:"940",height:"314"})),(0,o.kt)("li",{parentName:"ul"},"then, make sure to set the ",(0,o.kt)("inlineCode",{parentName:"li"},"layout.css.has-selector.enabled")," property to ",(0,o.kt)("strong",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},"restart Firefox and go to MTA to check the menu is working correctly.")),(0,o.kt)("p",null,"More documentation about the ",(0,o.kt)("inlineCode",{parentName:"p"},"has")," selector on Mozilla: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:has"},"https://developer.mozilla.org/en-US/docs/Web/CSS/:has")))}f.isMDXComponent=!0},9087:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/has-selector-0ffa80706e902905d3784f11ded015be.png"},2587:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/menu-firefox-cfe0c2c39b83cf6043ac3b2b00cc10fe.png"}}]);