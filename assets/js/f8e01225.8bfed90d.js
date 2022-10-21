"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3978],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),p=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return r?s.createElement(f,i(i({ref:t},c),{},{components:r})):s.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=r(7462),n=(r(7294),r(3905));const a={},i="Persist",o={unversionedId:"Teststep/persist",id:"version-1.7.0/Teststep/persist",title:"Persist",description:"Definition",source:"@site/versioned_docs/version-1.7.0/Teststep/6-persist.md",sourceDirName:"Teststep",slug:"/Teststep/persist",permalink:"/1.7.0/Teststep/persist",draft:!1,tags:[],version:"1.7.0",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delete Object",permalink:"/1.7.0/Teststep/delete"},next:{title:"Application Branch",permalink:"/1.7.0/application-branch"}},l={},p=[{value:"Definition",id:"definition",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Persist Teststep",id:"add-a-persist-teststep",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"persist"},"Persist"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"With this ",(0,n.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," type, all the objects are stored to the database that are created or changed by a Create or Change Object Teststep in the same Test Case. Also, all the objects that are marked as deleted, are deleted. "),(0,n.kt)("h2",{id:"actions"},"Actions"),(0,n.kt)("h3",{id:"add-a-persist-teststep"},"Add a Persist Teststep"),(0,n.kt)("p",null,'To add a Persist step, select Persist as the Action when creating an Object Teststep. Note that when selecting Persist, the name of the Teststep will be set to "Persist" automatically.'),(0,n.kt)("p",null,"Make sure to always insert the Persist Teststep after the Teststeps that perform other Object actions. "),(0,n.kt)("p",null,"A persist step will delete all the objects that are marked as deleted after the previous Persist Teststep in the same Test Case, or since the start of the Test Case. "),(0,n.kt)("p",null,"It is possible to have multiple Persist Teststeps in the same Test Case. However, if there is a technical error while executing the Test Case, the entire transaction for that Test Case is always rolled back."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note"),": an object that is created by a microflow (as the output parameter), is not committed to the database by a Persist action. To achieve this, put a ",(0,n.kt)("a",{parentName:"p",href:"change"},"Change Object")," Teststep before the Persist Teststep, that changes the object created by the Microflow Teststep (without actually changing any of the members)."),(0,n.kt)("p",null,"When encountering problems, also consult the ",(0,n.kt)("a",{parentName:"p",href:"../../../../additional/knownissues/persist-step-fails"},"Known issues"),"."))}u.isMDXComponent=!0}}]);