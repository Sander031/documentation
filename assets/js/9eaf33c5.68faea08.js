"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9247],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1351:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},p="Prepare Mendix project",l={unversionedId:"howtos/prepare-mendix-project",id:"howtos/prepare-mendix-project",title:"Prepare Mendix project",description:"To prepare the Mendix project for MTA, it is advisable to check for microflows that open a page. If you want to test a microflow that opens a page, you must include an output parameter in that microflow, returning the exact same object that is passed to the page.",source:"@site/docs/howtos/prepare-mendix-project.md",sourceDirName:"howtos",slug:"/howtos/prepare-mendix-project",permalink:"/howtos/prepare-mendix-project",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import MTA Plugin",permalink:"/howtos/import-plugin"},next:{title:"Record user actions",permalink:"/howtos/record-user-actions"}},s={},u=[{value:"Feedback?",id:"feedback",level:2}],f={toc:u};function d(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prepare-mendix-project"},"Prepare Mendix project"),(0,a.kt)("p",null,"To prepare the Mendix project for MTA, it is advisable to check for microflows that open a page. If you want to test a microflow that opens a page, you must include an output parameter in that microflow, returning the exact same object that is passed to the page."),(0,a.kt)("p",null,"To find all microflows that have a \u201cshow page\u201d activity, open Mendix Studio Pro, go to Edit\u2192 Find Advanced and select the following options:  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Find microflows",src:r(9376).Z,width:"454",height:"195"})),(0,a.kt)("p",null,"Choose an optional layout that is used in the project and Mendix will give you a list of \u201cfind results\u201d. Filter the find results by only showing results of the type \u201cmicroflows\u201d. Check all the microflows of the \u201cfind results\u201d and add return types for microflows you want to include in testing. Repeat this for all page layouts in use. This process will save you a lot of time if completed before configuring MTA."),(0,a.kt)("p",null,"A few notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only follow these steps for the microflows that you actually want to test"),(0,a.kt)("li",{parentName:"ul"},"If pages are called without an input object, no changes are needed")),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 21 april 2022"))}d.isMDXComponent=!0},9376:function(e,t,r){t.Z=r.p+"assets/images/find-microflows-9ae0f3a9d9d1763abe6df60449326d26.png"}}]);