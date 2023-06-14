"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8403],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||l;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=m;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[p]="string"==typeof e?e:i,o[1]=n;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},744:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>n,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const l={},o="Microflow call",n={unversionedId:"Teststep/microflow",id:"Teststep/microflow",title:"Microflow call",description:"Definition",source:"@site/docs/Teststep/1-microflow.md",sourceDirName:"Teststep",slug:"/Teststep/microflow",permalink:"/Teststep/microflow",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Teststep",permalink:"/Teststep/"},next:{title:"Create Object",permalink:"/Teststep/create"}},s={},c=[{value:"Definition",id:"definition",level:2},{value:"Add a Microflow Teststep",id:"add-a-microflow-teststep",level:2},{value:"Setting Microflow Parameters",id:"setting-microflow-parameters",level:2},{value:"Assign Empty",id:"assign-empty",level:3},{value:"Assign fixed value",id:"assign-fixed-value",level:3},{value:"Assign value from former Teststep",id:"assign-value-from-former-teststep",level:3},{value:"Assign values to a List of Objects",id:"assign-values-to-a-list-of-objects",level:3},{value:"Include a Microflow Parameter Value as a Data Variation Item",id:"include-a-microflow-parameter-value-as-a-data-variation-item",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"microflow-call"},"Microflow call"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"With this ",(0,i.kt)("a",{parentName:"p",href:"."},"Teststep")," type, a Microflow is executed. "),(0,i.kt)("p",null,'The microflow is executed regardless if the Execution user is allowed to, according to the selected Allowed Roles on the microflow. However, if "Apply entity access" is on for the microflow, the access on the domain model will be applied.'),(0,i.kt)("h2",{id:"add-a-microflow-teststep"},"Add a Microflow Teststep"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Test Case that you want to create a Teststep in."),(0,i.kt)("li",{parentName:"ul"},'Click "',(0,i.kt)("i",{class:"fal fa-plus-circle"}),' Add" and Click "',(0,i.kt)("i",{class:"fal fa-plus-circle"}),' Microflow teststep" to add a Microflow Teststep.'),(0,i.kt)("li",{parentName:"ul"},"Select the Microflow to execute. You can search by the module or microflow name, or by any of the input or output parameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setting-microflow-parameters"},"Set Microflow Parameters"),"."),(0,i.kt)("li",{parentName:"ul"},'Click on the "Save" button. ')),(0,i.kt)("h2",{id:"setting-microflow-parameters"},"Setting Microflow Parameters"),(0,i.kt)("p",null,"A microflow parameter can be an Object or any of the primitive types: String, Enumeration, Datetime, Integer, Decimal, Boolean."),(0,i.kt)("p",null,"Note that if the microflow contains input parameters, it is possible to save the Microflow Teststep without providing a value for these, but this may result in MTA showing an ",(0,i.kt)("a",{parentName:"p",href:"../error"},"Error"),"."),(0,i.kt)("h3",{id:"assign-empty"},"Assign Empty"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Select the "',(0,i.kt)("i",{class:"fal fa-empty-set"}),"\" button for the parameter to set it to 'Empty'.")),(0,i.kt)("h3",{id:"assign-fixed-value"},"Assign fixed value"),(0,i.kt)("p",null,"You can only assign fixed values to primitive types.\nAssigning values to an Object must be done ",(0,i.kt)("a",{parentName:"p",href:"#assign-value-from-former-teststep"},"from former Teststep"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click "',(0,i.kt)("i",{class:"fas fa-keyboard"}),'" on the right of the attribute, indicating a fixed value should be set.'),(0,i.kt)("li",{parentName:"ul"},"Enter or select a value for the attribute. ")),(0,i.kt)("p",null,"For each datatype, there is a different way of entering the value:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"String and numeric values can be entered in a text box;"),(0,i.kt)("li",{parentName:"ol"},"Boolean values need to be Yes or No (and cannot be 'Empty');"),(0,i.kt)("li",{parentName:"ol"},"Enumeration values can be selected from a dropdown;"),(0,i.kt)("li",{parentName:"ol"},"Datetime values can be entered either with a specified date, or currentdatetime with an offset.")),(0,i.kt)("p",null,"Note that if the value is not set, this means it will be set to 'Empty' when executing the test. "),(0,i.kt)("h3",{id:"assign-value-from-former-teststep"},"Assign value from former Teststep"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Setting a primitive value ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'First click "',(0,i.kt)("i",{class:"fal fa-chevron-circle-right"}),'" on the right of the attribute, indicating a former Teststep should be used to set the value.'),(0,i.kt)("li",{parentName:"ul"},"Select the Teststep that should provide the value.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Setting an Object value ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click "Select input", and either choose to select an existing teststep to set the objecct, or add a new Teststep that ',(0,i.kt)("a",{parentName:"li",href:"Teststep/create"},"Creates")," the value or ",(0,i.kt)("a",{parentName:"li",href:"Teststep/retrieve"},"Retrieves")," the value from database."),(0,i.kt)("li",{parentName:"ul"},"Select or Save the Teststep that should provide the value.")),(0,i.kt)("h3",{id:"assign-values-to-a-list-of-objects"},"Assign values to a List of Objects"),(0,i.kt)("p",null,'If a Microflow Parameter is a List instead of a single Object, it is possible to add multiple objects, thus filling the list. Use the "',(0,i.kt)("i",{class:"fal fa-plus-circle"}),'" Another input teststep" to accomplish this.'),(0,i.kt)("p",null,"Note that it is not possible to select the same previous teststep multiple times."),(0,i.kt)("h3",{id:"include-a-microflow-parameter-value-as-a-data-variation-item"},"Include a Microflow Parameter Value as a Data Variation Item"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Select the "',(0,i.kt)("i",{class:"fas fa-table"}),'" button for the parameter that you want to include in ',(0,i.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation"),".")))}f.isMDXComponent=!0}}]);