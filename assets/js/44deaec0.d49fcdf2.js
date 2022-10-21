"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Create Object",s={unversionedId:"Teststep/create",id:"version-1.7.0/Teststep/create",title:"Create Object",description:"Definition",source:"@site/versioned_docs/version-1.7.0/Teststep/2-create.md",sourceDirName:"Teststep",slug:"/Teststep/create",permalink:"/1.7.0/Teststep/create",draft:!1,tags:[],version:"1.7.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microflow call",permalink:"/1.7.0/Teststep/microflow"},next:{title:"Change Object",permalink:"/1.7.0/Teststep/change"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Create Object Teststep",id:"add-a-create-object-teststep",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-object"},"Create Object"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"With this ",(0,a.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," type, an object is created in-memory and put on the list for objects to be committed using a ",(0,a.kt)("a",{parentName:"p",href:"persist"},"Persist")," step."),(0,a.kt)("p",null,"When setting Attribute Values for a Create Object action, the Attribute will be ",(0,a.kt)("em",{parentName:"p"},"assigned")," the entered value, and 'empty' if checked, but left blank."),(0,a.kt)("h2",{id:"actions"},"Actions"),(0,a.kt)("h3",{id:"add-a-create-object-teststep"},"Add a Create Object Teststep"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Automatic Test Case that you want to create a Teststep in."),(0,a.kt)("li",{parentName:"ul"},'Click "',(0,a.kt)("em",{parentName:"li"},"+ Object"),'" to create an Object Teststep.'),(0,a.kt)("li",{parentName:"ul"},"Enter a name and Select 'Create' for the Action."),(0,a.kt)("li",{parentName:"ul"},"Select an entity."),(0,a.kt)("li",{parentName:"ul"},'Click "Insert before selected" to add the Teststep before the selected one, or "Insert after selected" to add the Teststep after the selected one. If there are no Teststeps in the Test Case yet, it does not matter.'),(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("a",{parentName:"li",href:"../attribute-value"},"Attribute Values")," that you want to use and enter a value."),(0,a.kt)("li",{parentName:"ul"},"Click '+Add' for each association that you want to set. Use the ",(0,a.kt)("i",{class:"fa-empty-set"}),' "Set empty" button to clear the association. Note that multiple values can only be set for both way reference set (many to many) associations.')),(0,a.kt)("p",null,"Note that not checking an Attribute Value in a Create Object Teststep will make the value default to what has been configured in the Mendix domain model (usually empty).\nChecking an Attribute Value but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value ('')."))}u.isMDXComponent=!0}}]);