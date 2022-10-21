"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},l="Test Application",o={unversionedId:"test-application",id:"version-1.5.0/test-application",title:"Test Application",description:"Definition",source:"@site/versioned_docs/version-1.5.0/test-application.md",sourceDirName:".",slug:"/test-application",permalink:"/1.5.0/test-application",draft:!1,tags:[],version:"1.5.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recording",permalink:"/1.5.0/recording"},next:{title:"Test Case",permalink:"/1.5.0/test-case"}},p={},s=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Test Application",id:"actions-on-test-application",level:2},{value:"View Test Application",id:"view-test-application",level:3},{value:"Create Test Application",id:"create-test-application",level:3},{value:"Delete Test Application",id:"delete-test-application",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-application"},"Test Application"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A Test Application is an ",(0,i.kt)("a",{parentName:"p",href:"application-environment"},"Application environment")," that is linked with a certain ",(0,i.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," and can be used to execute the ",(0,i.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," on. "),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the Application environment.")))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("p",null,"None."),(0,i.kt)("h2",{id:"actions-on-test-application"},"Actions on Test Application"),(0,i.kt)("h3",{id:"view-test-application"},"View Test Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To view the Test Applications for a ",(0,i.kt)("a",{parentName:"li",href:"test-configuration"},"Test Configuration"),', click "Test applications" after selecting the respective Test Configuration.')),(0,i.kt)("h3",{id:"create-test-application"},"Create Test Application"),(0,i.kt)("p",null,"Creating a Test Application means linking an ",(0,i.kt)("a",{parentName:"p",href:"application-environment"},"Application environment")," to a ",(0,i.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First, create or select a Test Configuration."),(0,i.kt)("li",{parentName:"ul"},'Click "',(0,i.kt)("em",{parentName:"li"},"+ Test application"),'".'),(0,i.kt)("li",{parentName:"ul"},"Select the Mendix ",(0,i.kt)("a",{parentName:"li",href:"application"},"Application")," that you want to test."),(0,i.kt)("li",{parentName:"ul"},"Then, select the Application environment that you want to test on (for non-MendixCloud environments, first create a Custom Environment)."),(0,i.kt)("li",{parentName:"ul"},"Enter the details for the Mta Plugin User for the respective environment and optionally test if a connection can be established."),(0,i.kt)("li",{parentName:"ul"},'Choose "Save".')),(0,i.kt)("h3",{id:"delete-test-application"},"Delete Test Application"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to the "Test applications" tab after selecting the Test Configuration that you want to delete the Test Application from.'),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("i",{class:"fas fa-trash-alt"})," to delete the Test Application you want to delete.")),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 21 april 2022"))}u.isMDXComponent=!0}}]);