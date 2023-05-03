"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7453],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,f=p["".concat(o,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(f,s(s({ref:t},c),{},{components:a})):n.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5481:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={},s="Change Object",l={unversionedId:"Teststep/change",id:"version-2.0.0/Teststep/change",title:"Change Object",description:"Definition",source:"@site/versioned_docs/version-2.0.0/Teststep/3-change.md",sourceDirName:"Teststep",slug:"/Teststep/change",permalink:"/2.0.0/Teststep/change",draft:!1,tags:[],version:"2.0.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Object",permalink:"/2.0.0/Teststep/create"},next:{title:"Retrieve Object",permalink:"/2.0.0/Teststep/retrieve"}},o={},u=[{value:"Definition",id:"definition",level:2},{value:"Add a Change Object Teststep",id:"add-a-change-object-teststep",level:2},{value:"Setting values",id:"setting-values",level:2},{value:"Include or exclude an Attribute Value",id:"include-or-exclude-an-attribute-value",level:3},{value:"Set a fixed Attribute Value",id:"set-a-fixed-attribute-value",level:3},{value:"Use a former Teststep to set an Attribute Value",id:"use-a-former-teststep-to-set-an-attribute-value",level:3},{value:"Assign associations",id:"assign-associations",level:3},{value:"Generate assignments from database",id:"generate-assignments-from-database",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"change-object"},"Change Object"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"With this ",(0,r.kt)("a",{parentName:"p",href:"."},"Teststep")," type, objects from a previous ",(0,r.kt)("a",{parentName:"p",href:"."},"Teststep")," are changed in-memory."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Note that a Change teststep can be used on a single object or on a list of objects, and that attribute values and associations specified in the teststep, will be applied to ",(0,r.kt)("em",{parentName:"p"},"all")," objects!")),(0,r.kt)("p",null,"To save the changes to the database, add a ",(0,r.kt)("a",{parentName:"p",href:"persist"},"Persist")," step."),(0,r.kt)("h2",{id:"add-a-change-object-teststep"},"Add a Change Object Teststep"),(0,r.kt)("p",null,"There are two options to add a Change Object teststep. The first option is quicker:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option 1:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Test Case that you want to create a Teststep in."),(0,r.kt)("li",{parentName:"ul"},'Click on the "',(0,r.kt)("i",{class:"fas fa-ellipsis"}),'" button on the Teststep that returns the object(s) that you want to change, and choose "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Change output".')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option 2:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the Test Suite and select the Test Case that you want to create a Teststep in."),(0,r.kt)("li",{parentName:"ol"},'Click "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Add" and Click "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Change teststep" to add a Change Object Teststep.'),(0,r.kt)("li",{parentName:"ol"},"Select an entity. You can search by name."),(0,r.kt)("li",{parentName:"ol"},"Select the previous Teststep that returns the object(s) that you want to change. This could be a Create, Change or Retrieve Teststep but also a Microflow Teststep that returns an object or a list of objects.")),(0,r.kt)("h2",{id:"setting-values"},"Setting values"),(0,r.kt)("h3",{id:"include-or-exclude-an-attribute-value"},"Include or exclude an Attribute Value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Toggle the checkbox next to the attribute to include or exclude it.")),(0,r.kt)("p",null,"Note that not including an Attribute Value in a Change Object Teststep will leave the value unchanged for that attribute.\nIncluding an Attribute Value but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value (''). "),(0,r.kt)("h3",{id:"set-a-fixed-attribute-value"},"Set a fixed Attribute Value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fas fa-keyboard"}),'" on the right of the attribute, indicating a fixed value should be set.'),(0,r.kt)("li",{parentName:"ul"},"Enter or select a value for the attribute.")),(0,r.kt)("p",null,"Note: For datetime values you can either specify a date, or calculate the date with an offset from the current datetime."),(0,r.kt)("h3",{id:"use-a-former-teststep-to-set-an-attribute-value"},"Use a former Teststep to set an Attribute Value"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-chevron-circle-right"}),'" on the right of the attribute, indicating a former Teststep should be used to set the value.'),(0,r.kt)("li",{parentName:"ul"},"Select the Teststep that should provide the value.")),(0,r.kt)("h3",{id:"assign-associations"},"Assign associations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("i",{class:"fal fa-plus-circle"}),' Add" for each association that you want to set. '),(0,r.kt)("li",{parentName:"ul"},'Use the "',(0,r.kt)("i",{class:"fal fa-empty-set"}),' Set empty" button to clear the association. ')),(0,r.kt)("p",null,"Note that multiple values can only be set for both way reference set (many to many) associations."),(0,r.kt)("h3",{id:"generate-assignments-from-database"},"Generate assignments from database"),(0,r.kt)("p",null,'You can choose to fill all the attributes and associations using existing values in the database, by clicking "',(0,r.kt)("i",{class:"fas fa-database"}),' Fill with values from database". This will fill the attributes with values based on a random Object retrieved from the database, and fill associations where the that Object is the owner.'))}d.isMDXComponent=!0}}]);