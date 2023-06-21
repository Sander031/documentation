"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={},a="After Startup Error",l={unversionedId:"after-startup-error",id:"after-startup-error",title:"After Startup Error",description:"Issue summary",source:"@site/additional/04-knownissues/after-startup-error.md",sourceDirName:".",slug:"/after-startup-error",permalink:"/additional/knownissues/after-startup-error",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Known issues",permalink:"/additional/knownissues/"},next:{title:"Cannot add application",permalink:"/additional/knownissues/cannot_add_application"}},s={},u=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Older JAR files",id:"older-jar-files",level:3},{value:"Changes made in the Plugin module",id:"changes-made-in-the-plugin-module",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"after-startup-error"},"After Startup Error"),(0,o.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,o.kt)("p",null,"When compiling a Mendix project under test after importing the Menditect Plugin Module, a Critical error occurs in the After Startup microflow, which prevents running the project."),(0,o.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,o.kt)("h3",{id:"older-jar-files"},"Older JAR files"),(0,o.kt)("p",null,"There are JAR files in the Mendix project userlib directory that belong to an older version of the Plugin Module. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Resolution ")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Mendix project directory in explorer, or show the project directory from the Mendix modeler."),(0,o.kt)("li",{parentName:"ol"},"Go to the userlib subdirectory."),(0,o.kt)("li",{parentName:"ol"},'Delete all previous JAR files (like "mta-plugin-mendix-9-0-1.4.0.jar") and respective .RequiredLib files.'),(0,o.kt)("li",{parentName:"ol"},"Clean your deployment directory if you are running from your local machine.")),(0,o.kt)("h3",{id:"changes-made-in-the-plugin-module"},"Changes made in the Plugin module"),(0,o.kt)("p",null,"If changes are made to the Plugin module, or in the JAVA files used by the Plugin module, Menditect cannot guarantee that the Plugin module will work as expected. To fix any issues resulting from this, revert the changes made end follow the steps described in the Known Issues section. If the problem persists, contact Menditect support."))}d.isMDXComponent=!0}}]);