"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7424],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3356:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={},c="Microflow call",s={unversionedId:"refguide/Teststep/microflow",id:"refguide/Teststep/microflow",title:"Microflow call",description:"Definition",source:"@site/docs/refguide/Teststep/1-microflow.md",sourceDirName:"refguide/Teststep",slug:"/refguide/Teststep/microflow",permalink:"/refguide/Teststep/microflow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Teststep",permalink:"/refguide/Teststep/"},next:{title:"Create Object",permalink:"/refguide/Teststep/create"}},p={},u=[{value:"Definition",id:"definition",level:2},{value:"Actions",id:"actions",level:2},{value:"Add a Microflow Teststep",id:"add-a-microflow-teststep",level:3}],f={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microflow-call"},"Microflow call"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"With this ",(0,i.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," type, a Microflow is executed. "),(0,i.kt)("p",null,'The microflow is executed using the credentials of the Execution User that is configured on the Test Case, regardless if this user is allowed to, according to the selected Allowed Roles on the microflow. However, if "Apply entity access" is on for the microflow, the access on the domain model will be applied.'),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("h3",{id:"add-a-microflow-teststep"},"Add a Microflow Teststep"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Test Case that you want to create a Teststep in."),(0,i.kt)("li",{parentName:"ul"},'Click "',(0,i.kt)("em",{parentName:"li"},"+ Teststep"),'" and Click "',(0,i.kt)("em",{parentName:"li"},"+ Microflow"),'" to add a Microflow Teststep.'),(0,i.kt)("li",{parentName:"ul"},"Select the Microflow to execute. You can search by the module or microflow name, or by any of the input or output parameters."),(0,i.kt)("li",{parentName:"ul"},"If neccesary, fill the ",(0,i.kt)("a",{parentName:"li",href:"../microflow-parameter-value"},"Microflow Parameter Values"),"."),(0,i.kt)("li",{parentName:"ul"},'Click on the "Save" button. ')),(0,i.kt)("p",null,"Note that it is possible to save the Microflow Teststep without providing a value for any of the input parameters, but this will result in MTA showing a ",(0,i.kt)("a",{parentName:"p",href:"../construction-error"},"construction error"),"."),(0,i.kt)("p",null,"To prepare a Mendix app for Microflow Teststeps, follow ",(0,i.kt)("a",{parentName:"p",href:"../../howtos/prepare-mendix-project"},"these steps"),"."))}d.isMDXComponent=!0}}]);