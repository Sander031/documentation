"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2500],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(a),b=n,f=d["".concat(o,".").concat(b)]||d[b]||c[b]||i;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={},l="Attribute Value",u={unversionedId:"attribute-value",id:"version-1.5.0/attribute-value",title:"Attribute Value",description:"Definition",source:"@site/versioned_docs/version-1.5.0/attribute-value.md",sourceDirName:".",slug:"/attribute-value",permalink:"/1.5.0/attribute-value",draft:!1,tags:[],version:"1.5.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Assert on Object Count",permalink:"/1.5.0/assert-object-count"},next:{title:"Construction Error",permalink:"/1.5.0/construction-error"}},o={},s=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Attribute Value",id:"actions-on-attribute-value",level:2},{value:"View Attribute Values",id:"view-attribute-values",level:3},{value:"Include or exclude an Attribute Value",id:"include-or-exclude-an-attribute-value",level:3},{value:"Set a fixed Attribute Value",id:"set-a-fixed-attribute-value",level:3},{value:"Use a former Teststep to set an Attribute Value",id:"use-a-former-teststep-to-set-an-attribute-value",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"attribute-value"},"Attribute Value"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"The Attribute Value contains the information that specifies the input of an Object ",(0,n.kt)("a",{parentName:"p",href:"teststep"},"Teststep"),"."),(0,n.kt)("p",null,"The purpose of an Attribute Value is either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"to set the value of an object attribute in a Create and Change Attribute Object Teststeps, the value of the attribute of the object will be set or changed in-memory;"),(0,n.kt)("li",{parentName:"ul"},"to narrow the list of output objects in a Retrieve Object Teststep, the given attribute value behaves like an XPATH statement.")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the attribute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Included"),(0,n.kt)("td",{parentName:"tr",align:null},"This indicates whether setting the value for the attribute is included in the Teststep.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Datatype"),(0,n.kt)("td",{parentName:"tr",align:null},"Datatype of the attribute.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input type"),(0,n.kt)("td",{parentName:"tr",align:null},'Indicates how the value is specified. The "Fixed" input type specifies a by the test automator given value. The "From former Teststep" input type specifies that the value is derived from a former Teststep.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Value"),(0,n.kt)("td",{parentName:"tr",align:null},"The value of the attribute.")))),(0,n.kt)("h2",{id:"business-rules"},"Business rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A former ",(0,n.kt)("a",{parentName:"li",href:"teststep"},"Teststep")," must be selected if an Attribute Value has the input type 'Former Teststep'. The ",(0,n.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration")," that contains the Teststep can not be executed as long as the former Teststep is not selected. "),(0,n.kt)("li",{parentName:"ul"},"The offset of current date or a fixed date must be specified if an Attribute Value has the input type 'Fixed value' and a datatype 'Datetime'.")),(0,n.kt)("h2",{id:"actions-on-attribute-value"},"Actions on Attribute Value"),(0,n.kt)("h3",{id:"view-attribute-values"},"View Attribute Values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to an Object ",(0,n.kt)("a",{parentName:"li",href:"teststep"},"Teststep"),' in the Test Suite page. The Attribute Values of the object are shown in the "Attributes" tab.')),(0,n.kt)("h3",{id:"include-or-exclude-an-attribute-value"},"Include or exclude an Attribute Value"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to an Object Teststep in the Test Suite page."),(0,n.kt)("li",{parentName:"ul"},'Toggle the checkbox value next to the attribute in the "Attributes" tab to include or exclude it.')),(0,n.kt)("p",null,"Note that: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After creating an Object Teststep, all Attribute Values are included by default."),(0,n.kt)("li",{parentName:"ul"},"If an attribute is included but an Attribute Value is not set, the value will be empty during test execution.")),(0,n.kt)("h3",{id:"set-a-fixed-attribute-value"},"Set a fixed Attribute Value"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to an Object Teststep in the Test Suite page."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("i",{class:"fas fa-keyboard"})," on the right of the attribute, indicating a fixed value should be set."),(0,n.kt)("li",{parentName:"ul"},"Enter or select a value for the attribute.")),(0,n.kt)("p",null,"Note: For datetime values you can enter either a fixed date, the current datetime, or an offset of the current datetime."),(0,n.kt)("h3",{id:"use-a-former-teststep-to-set-an-attribute-value"},"Use a former Teststep to set an Attribute Value"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to an Object Teststep in the Test Suite page."),(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("svg",{role:"img",viewBox:"0 0 512 512",width:"2%",height:"2%",xmlns:"http://www.w3.org/2000/svg"},(0,n.kt)("path",{fill:"currentColor",d:"M235.3 132.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L313.4 256l-100.7 100.7c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0l112-112C350.4 264.2 352 260.1 352 256s-1.562-8.188-4.688-11.31L235.3 132.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z",class:""}))," on the right of the attribute, indicating a former Teststep should be used to set the value."),(0,n.kt)("li",{parentName:"ul"},"Select the Teststep that should provide the value.")),(0,n.kt)("h2",{id:"related-topics"},"Related topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"microflow-parameter-value"},"Microflow Parameter Value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"teststep"},"Teststep"))),(0,n.kt)("h2",{id:"feedback"},"Feedback?"),(0,n.kt)("p",null,"Missing anything? ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,n.kt)("p",null,"Last updated 21 april 2022"))}c.isMDXComponent=!0}}]);