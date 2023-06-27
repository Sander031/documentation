"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6079],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},A=Object.keys(e);for(n=0;n<A.length;n++)a=A[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(n=0;n<A.length;n++)a=A[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,A=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,b=d["".concat(o,".").concat(u)]||d[u]||c[u]||A;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var A=a.length,l=new Array(A);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<A;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9790:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>A,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const A={},l="Use Data Hub with MTA",i={unversionedId:"use-data-hub-with-mta",id:"use-data-hub-with-mta",title:"Use Data Hub with MTA",description:"Howto",source:"@site/additional/01-howtos/use-data-hub-with-mta.md",sourceDirName:".",slug:"/use-data-hub-with-mta",permalink:"/additional/howtos/use-data-hub-with-mta",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Nanoflows",permalink:"/additional/howtos/test-nanoflows"},next:{title:"Use a previous teststep's data",permalink:"/additional/howtos/use-previous-teststeps-data"}},o={},s=[{value:"Howto",id:"howto",level:2},{value:"Retrieving OData objects",id:"retrieving-odata-objects",level:3},{value:"Creating OData objects",id:"creating-odata-objects",level:3},{value:"Changing OData objects",id:"changing-odata-objects",level:3},{value:"Deleting OData objects",id:"deleting-odata-objects",level:3},{value:"Handling errors",id:"handling-errors",level:3},{value:"Feedback?",id:"feedback",level:2}],p={toc:s},d="wrapper";function c(e){let{components:t,...A}=e;return(0,r.kt)(d,(0,n.Z)({},p,A,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-data-hub-with-mta"},"Use Data Hub with MTA"),(0,r.kt)("h2",{id:"howto"},"Howto"),(0,r.kt)("p",null,"This document describes how to handle entities that are created from a published OData source (whether or not connected via the Data Hub in Mendix) in MTA."),(0,r.kt)("p",null,"The assumption is made that both the publishing App and the consuming App are built in Mendix."),(0,r.kt)("h3",{id:"retrieving-odata-objects"},"Retrieving OData objects"),(0,r.kt)("p",null,"Retrieving data from a Dataset that is exposed as an Entity in a Mendix App works exactly the same as retrieving data from a regular Entity."),(0,r.kt)("p",null,"It is possible to use a regular ",(0,r.kt)("a",{parentName:"p",href:"../../Teststep/retrieve"},"Retrieve teststep"),". Domain model access must be configured for the Entity, allowing the Execution user Read Access."),(0,r.kt)("h3",{id:"creating-odata-objects"},"Creating OData objects"),(0,r.kt)("p",null,"Creating data from a Dataset that is exposed as an Entity in a Mendix App can be done by a ",(0,r.kt)("a",{parentName:"p",href:"../../Teststep/create"},"Create teststep"),", but saving the data to the database of the publishing App cannot be done by using ",(0,r.kt)("a",{parentName:"p",href:"../../Teststep/persist"},"Persist"),'. This must be handled by a Microflow call, where the microflow contains a "Send external object" action. Only a single object can be committed by this action. It is best to check if the object is not empty first, to allow for similar behaviour as in MTA.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Send external object",src:a(5970).Z,width:"487",height:"271"})),(0,r.kt)("p",null,"Domain model access must be configured for the Entity, allowing the Execution user Create and Write Access. "),(0,r.kt)("p",null,"Additionally, the Published OData service must allow the Insertable and Updatable capability for the published resource:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/refguide/published-odata-resource/#capabilities"},"https://docs.mendix.com/refguide/published-odata-resource/#capabilities")," "),(0,r.kt)("h3",{id:"changing-odata-objects"},"Changing OData objects"),(0,r.kt)("p",null,"Changing data from a Dataset that is exposed as an Entity in a Mendix App can be done by a ",(0,r.kt)("a",{parentName:"p",href:"../../Teststep/change"},"Change teststep"),", but saving the data to the database of the publishing App cannot be done by using ",(0,r.kt)("a",{parentName:"p",href:"../../Teststep/persist"},"Persist"),'. This must be handled by a Microflow call, where the microflow contains a "Send external object" action. Only a single object can be committed by this action. It is best to check if the object is not empty first, to allow for similar behaviour as in MTA.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Send external object",src:a(5970).Z,width:"487",height:"271"})),(0,r.kt)("p",null,"Domain model access must be configured for the Entity, allowing the Execution user Write Access. "),(0,r.kt)("p",null,"Additionally, the Published OData service must allow the Updatable capability for the published resource:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/refguide/published-odata-resource/#capabilities"},"https://docs.mendix.com/refguide/published-odata-resource/#capabilities")," "),(0,r.kt)("h3",{id:"deleting-odata-objects"},"Deleting OData objects"),(0,r.kt)("p",null,"Deleting data from a Dataset that is exposed as an Entity in a Mendix App can ",(0,r.kt)("strong",{parentName:"p"},"not")," be done by a ",(0,r.kt)("a",{parentName:"p",href:"../../Teststep/delete"},"Delete teststep")," combined with ",(0,r.kt)("a",{parentName:"p",href:"../../Teststep/persist"},"Persist"),'. Deletion must be handled by a Microflow call, where the microflow contains a "Delete external object" action. Only a single object can be deleted by this action. It is best to check if the object is not empty first, to allow for similar behaviour as in MTA.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete external object",src:a(6316).Z,width:"495",height:"242"})),(0,r.kt)("p",null,"Domain model access must be configured for the Entity, allowing the Execution user Delete Access. "),(0,r.kt)("p",null,"Additionally, the Published OData service must allow the Deletable capability for the published resource:\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.mendix.com/refguide/published-odata-resource/#capabilities"},"https://docs.mendix.com/refguide/published-odata-resource/#capabilities")," "),(0,r.kt)("h3",{id:"handling-errors"},"Handling errors"),(0,r.kt)("p",null,"Errors as a result of restrictions (such as Access restrictions or Domain model Validation Rules) in the publishing App are shown on the details of the Teststep run when executing the Test Case in MTA. "),(0,r.kt)("p",null,"If the publishing App is not running, the error will be ",(0,r.kt)("inlineCode",{parentName:"p"},"The OData endpoint returned 503 Service Unavailable.")," This error will be shown either upon a Retrieve teststep, or upon committing or deleting in the external database (using abovementioned microflow actions)."),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 23 june 2023"))}c.isMDXComponent=!0},5970:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},6316:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);