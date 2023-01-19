"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9659],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),l=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,h=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?s.createElement(h,i(i({ref:t},c),{},{components:r})):s.createElement(h,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8902:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=r(7462),n=(r(7294),r(3905));const a={},i="Persist",o={unversionedId:"Teststep/persist",id:"Teststep/persist",title:"Persist",description:"Definition",source:"@site/docs/Teststep/6-persist.md",sourceDirName:"Teststep",slug:"/Teststep/persist",permalink:"/Teststep/persist",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delete Object",permalink:"/Teststep/delete"}},p={},l=[{value:"Definition",id:"definition",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Persist Teststep",id:"add-a-persist-teststep",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"persist"},"Persist"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"With this ",(0,n.kt)("a",{parentName:"p",href:"."},"Teststep"),", Objects from a Create or Change Object Teststep that is positioned previously in the same Test Case, are ",(0,n.kt)("strong",{parentName:"p"},"committed")," to the database, and Objects from a Delete Object Teststep that is positioned previously in the same Test Case, are ",(0,n.kt)("strong",{parentName:"p"},"deleted")," from the database."),(0,n.kt)("p",null,"Domain model events (Before and After Commit), if configured, are triggered for Objects that are committed."),(0,n.kt)("p",null,"Domain model events (Before and After Delete), if configured, are triggered for Objects that are deleted."),(0,n.kt)("h2",{id:"actions"},"Actions"),(0,n.kt)("h3",{id:"add-a-persist-teststep"},"Add a Persist Teststep"),(0,n.kt)("p",null,'To add a Persist step, select Persist as the Action when creating a Teststep. Note that when selecting Persist, the name of the Teststep will be set to "Persist" automatically.'),(0,n.kt)("p",null,"Make sure to always insert the Persist Teststep after the Teststeps that perform other Object actions. "),(0,n.kt)("p",null,"A persist step will store all objects created or changed after the previous Persist Teststep in the same Test Case, or since the start of the Test Case. "),(0,n.kt)("p",null,"A persist step will delete all objects that are marked as deleted after the previous Persist Teststep in the same Test Case, or since the start of the Test Case. "),(0,n.kt)("p",null,"It is possible to have multiple Persist Teststeps in the same Test Case. However, if there is a technical error while executing the Test Case, the entire transaction for that Test Case is always rolled back."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note"),": an object that is created by a microflow (as the output parameter), is not committed to the database by a Persist action. To achieve this, put a ",(0,n.kt)("a",{parentName:"p",href:"change"},"Change Object")," Teststep before the Persist Teststep, that changes the object created by the Microflow Teststep (without actually changing any of the members)."),(0,n.kt)("p",null,"When encountering problems, also consult the ",(0,n.kt)("a",{parentName:"p",href:"../../additional/knownissues/persist-step-fails"},"Known issues"),"."))}u.isMDXComponent=!0}}]);