"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=i,f=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={},a="Use Microflow Call Hierarchy Extension in Studio Pro",l={unversionedId:"use-microflow-call-hierarchy-extension",id:"use-microflow-call-hierarchy-extension",title:"Use Microflow Call Hierarchy Extension in Studio Pro",description:"Watch installation video!",source:"@site/additional/01-howtos/use-microflow-call-hierarchy-extension.md",sourceDirName:".",slug:"/use-microflow-call-hierarchy-extension",permalink:"/additional/howtos/use-microflow-call-hierarchy-extension",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Data Hub with MTA",permalink:"/additional/howtos/use-data-hub-with-mta"},next:{title:"Use a previous teststep's data",permalink:"/additional/howtos/use-previous-teststeps-data"}},c={},s=[{value:"Howto",id:"howto",level:2},{value:"Installation",id:"installation",level:2},{value:"Microflow Call Hierarchy",id:"microflow-call-hierarchy",level:2},{value:"Known limitations",id:"known-limitations",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:s},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-microflow-call-hierarchy-extension-in-studio-pro"},"Use Microflow Call Hierarchy Extension in Studio Pro"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Watch installation video!")),(0,i.kt)("iframe",{src:"https://player.vimeo.com/video/932891691",height:"300",width:"450",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0}),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"howto"},"Howto"),(0,i.kt)("p",null,"This document describes how to import and configure the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.mendix.com/link/component/225211"},"Microflow Call Hierarchy extension ",(0,i.kt)("i",{class:"fas fa-external-link"})),", so you can use it in Mendix Studio Pro."),(0,i.kt)("p",null,"The Microflow Call Hierarchy extension can be used on a microflow in Mendix Studio Pro, to hierarchically view all submicroflows that are called from that microflow in a tree structure."),(0,i.kt)("p",null,"The Microflow Call Hierarchy extension can also be used to ",(0,i.kt)("a",{parentName:"p",href:"generate-test#from-mendix-studio-pro"},"generate a microflow test")," in Menditect Test Automation (MTA), and view ",(0,i.kt)("a",{parentName:"p",href:"../../test-case"},"test cases")," where that microflow is executed."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To use the Microflow Call Hierarchy extension, you must have installed ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.mendix.com/link/studiopro/10.6.3"},"Mendix Studio Pro 10.6.3 ",(0,i.kt)("i",{class:"fas fa-external-link"}))," or higher."),(0,i.kt)("p",null,"To install the Microflow Call Hierarchy extension:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create or open a Mendix App in Studio Pro 10.6.3 or higher;"),(0,i.kt)("li",{parentName:"ul"},"Download the ",(0,i.kt)("a",{parentName:"li",href:"https://marketplace.mendix.com/link/component/225211"},"Microflow Call Hierarchy extension ",(0,i.kt)("i",{class:"fas fa-external-link"}))," from the Mendix marketplace;"),(0,i.kt)("li",{parentName:"ul"},"Import it in the Mendix App.")),(0,i.kt)("h2",{id:"microflow-call-hierarchy"},"Microflow Call Hierarchy"),(0,i.kt)("p",null,"To view the Microflow Call Hierarchy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the App Explorer tab is visible in Studio Pro."),(0,i.kt)("li",{parentName:"ul"},"Right-click on any Microflow in the App Explorer."),(0,i.kt)("li",{parentName:"ul"},'Select the "Menditect" sub menu.'),(0,i.kt)("li",{parentName:"ul"},'Click on "Microflow Call Hierarchy".')),(0,i.kt)("p",null,"Mendix will open the Microflow Call Hierarchy tab and show all submicroflows called from the selected microflow, hierarchically."),(0,i.kt)("p",null,"Double-click on any of the microflows in this tab, to open it in Studio Pro."),(0,i.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rules are not shown in the hierarchy view."),(0,i.kt)("li",{parentName:"ul"},"Viewing a very large microflow call hierarchy will crash the extension webviewer tab in Studio Pro."),(0,i.kt)("li",{parentName:"ul"},"Switching Apps in Studio Pro may crash the extension in Studio Pro."),(0,i.kt)("li",{parentName:"ul"},"Excluded microflows are not viewed differently than included microflows."),(0,i.kt)("li",{parentName:"ul"},"If the project contains errors, the call hierarchy is not reliable."),(0,i.kt)("li",{parentName:"ul"},"Using SSO for the credentials that are used to login to MTA is not supported."),(0,i.kt)("li",{parentName:"ul"},"Incorrect configuration of the constants in the Deeplink module may lead to errors in the web viewer."),(0,i.kt)("li",{parentName:"ul"},"A large number of user sessions can appear in MTA when using the extension intensively. "),(0,i.kt)("li",{parentName:"ul"},"Using the extension in Studio Pro under MacOS is currently not supported.")),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Click on ",(0,i.kt)("i",{class:"fas fa-pen-field"})," to ",(0,i.kt)("a",{parentName:"strong",href:"https://marketplace.mendix.com/link/component/225211"},"leave a review ",(0,i.kt)("i",{class:"fas fa-external-link"}))," of the Microflow Call Hierarchy extension on the Mendix Marketplace!")),(0,i.kt)("p",null,"Last updated 3 April 2024"))}h.isMDXComponent=!0}}]);