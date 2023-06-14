"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4739],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,b=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Delete Object",s={unversionedId:"Teststep/delete",id:"Teststep/delete",title:"Delete Object",description:"Definition",source:"@site/docs/Teststep/5-delete.md",sourceDirName:"Teststep",slug:"/Teststep/delete",permalink:"/Teststep/delete",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Retrieve Object",permalink:"/Teststep/retrieve"},next:{title:"Persist",permalink:"/Teststep/persist"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Delete Object Teststep",id:"add-a-delete-object-teststep",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delete-object"},"Delete Object"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"With this ",(0,a.kt)("a",{parentName:"p",href:"."},"Teststep")," type, an object or objects from a previous ",(0,a.kt)("a",{parentName:"p",href:"."},"Teststep")," is marked for deletion."),(0,a.kt)("p",null,"To delete it from the database, add a ",(0,a.kt)("a",{parentName:"p",href:"persist"},"Persist")," step."),(0,a.kt)("h2",{id:"actions"},"Actions"),(0,a.kt)("h3",{id:"add-a-delete-object-teststep"},"Add a Delete Object Teststep"),(0,a.kt)("p",null,"There are two options to Delete an Object. The first option is quicker:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Option 1:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the '",(0,a.kt)("i",{class:"fas fa-ellipsis"}),"' button on the Teststep that returns the object that you want to delete, and choose \"",(0,a.kt)("i",{class:"fal fa-plus-circle"}),' Delete output".')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Option 2:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the Test Case that you want to create a Teststep in."),(0,a.kt)("li",{parentName:"ol"},'Click "',(0,a.kt)("i",{class:"fal fa-plus-circle"}),' Add" and Click "',(0,a.kt)("i",{class:"fal fa-plus-circle"}),' Delete teststep" to add a Delete Object Teststep.'),(0,a.kt)("li",{parentName:"ol"},"Select an entity. You can search by name."),(0,a.kt)("li",{parentName:"ol"},"Select the previous Teststep that returns the object that needs to be deleted. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object."),(0,a.kt)("li",{parentName:"ol"},'Click on the "Save" button. ')),(0,a.kt)("p",null,"When deleting objects from multiple entities, always make sure to have the Delete teststeps in the right order, to make sure domain model Delete Constraints don't prevent deletion of the object(s)."),(0,a.kt)("p",null,"Note that if a retrieved object is deleted by a Delete Object Teststep in MTA, and afterwards changed in another Teststep, MTA will not give a warning during test design, but give a runtime error on test execution because the object to be changed is no longer available."))}d.isMDXComponent=!0}}]);