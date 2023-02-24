"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Test Nanoflows",s={unversionedId:"howtos/test-nanoflows",id:"howtos/test-nanoflows",title:"Test Nanoflows",description:"To test the actions that exist in a nanoflow, simply use the recorder to detect these actions. Every create object in the nanoflow will yield a Create Object Teststep in MTA, every retrieve object will yield a Retrieve Object Teststep, et cetera. MTA will try to recreate all the actions, just as recorded user actions in a page are recreated.",source:"@site/additional/01-howtos/test-nanoflows.md",sourceDirName:"01-howtos",slug:"/howtos/test-nanoflows",permalink:"/additional/howtos/test-nanoflows",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test an API",permalink:"/additional/howtos/test-api"},next:{title:"Use a previous teststep's data",permalink:"/additional/howtos/use-previous-teststeps-data"}},l={},c=[{value:"Explanation",id:"explanation",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-nanoflows"},"Test Nanoflows"),(0,a.kt)("p",null,"To test the actions that exist in a nanoflow, simply use the ",(0,a.kt)("a",{parentName:"p",href:"record-user-actions"},"recorder")," to detect these actions. Every create object in the nanoflow will yield a Create Object Teststep in MTA, every retrieve object will yield a Retrieve Object Teststep, et cetera. MTA will try to recreate all the actions, just as recorded user actions in a page are recreated."),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("p",null,"Any Mendix app consists of a client (frontend), server (backend) and database layer. The client layer could consist of a browser tab, but also a rest or web service request or OData call. The server (Mendix runtime) could be in the Mendix cloud or Azure, but also in a private cloud or on premise. The server communicates with the database and with the client. MTA exists on the communication between these two. It has rudimental information about the server (Microflows) and the database (Domain model) but none about the client. This provides a lot of flexibility, because it does not depend on the client to execute tests, but it also has downsides, because MTA will not test any logic that only exists on pages, snippets, widgets et cetera. "),(0,a.kt)("p",null,"A nanoflow is essentially a client helper. It exists in the client and offers the same functionality that is offered in a page like create, save, delete, rollback but also javascript execution. That is why nanoflows are not inherently supported to be tested in MTA. However, there is a workaround for this problem."),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 18 may 2022"))}u.isMDXComponent=!0}}]);