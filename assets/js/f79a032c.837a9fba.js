"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Cannot add application",s={unversionedId:"cannot_add_application",id:"cannot_add_application",title:"Cannot add application",description:"Issue summary",source:"@site/additional/04-knownissues/cannot_add_application.md",sourceDirName:".",slug:"/cannot_add_application",permalink:"/additional/knownissues/cannot_add_application",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"After Startup Error",permalink:"/additional/knownissues/after-startup-error"},next:{title:"Generic random error message",permalink:"/additional/knownissues/generic-random-error-message"}},l={},p=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cannot-add-application"},"Cannot add application"),(0,a.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,a.kt)("p",null,"Sometimes a Mendix Application or ",(0,a.kt)("a",{parentName:"p",href:"../../application-branch"},"Application Branch")," is not visible in the list when adding an ",(0,a.kt)("a",{parentName:"p",href:"../../application"},"Application")," or ",(0,a.kt)("a",{parentName:"p",href:"../../application-revision"},"Revision"),"."),(0,a.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,a.kt)("p",null,"If an Application or Branch is not (yet) visible, this could be because the App is not yet Published to a Sandbox or Licensed Cloud Environment."),(0,a.kt)("p",null,"If the Application was just added to Mendix, you first have to hit the Publish button from Mendix Studio Pro."),(0,a.kt)("p",null,"If the Publish button is not yet enabled, you have to restart Mendix Studio Pro."))}d.isMDXComponent=!0}}]);