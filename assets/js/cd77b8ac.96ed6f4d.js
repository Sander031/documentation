"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,k=f["".concat(u,".").concat(d)]||f[d]||c[d]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},o="Test Configuration",l={unversionedId:"test-configuration",id:"version-1.5.0/test-configuration",title:"Test Configuration",description:"Definition",source:"@site/versioned_docs/version-1.5.0/test-configuration.md",sourceDirName:".",slug:"/test-configuration",permalink:"/1.5.0/test-configuration",draft:!1,tags:[],version:"1.5.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Case",permalink:"/1.5.0/test-case"},next:{title:"Test Instruction",permalink:"/1.5.0/test-instruction"}},u={},s=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Test Configuration",id:"actions-on-test-configuration",level:2},{value:"View Test Configurations",id:"view-test-configurations",level:3},{value:"Create a new Test Configuration",id:"create-a-new-test-configuration",level:3},{value:"Execute a Test Configuration",id:"execute-a-test-configuration",level:3},{value:"Delete a Test Configuration",id:"delete-a-test-configuration",level:3},{value:"Restore a deleted Test Configuration",id:"restore-a-deleted-test-configuration",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-configuration"},"Test Configuration"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"A Test Configuration is an executable test script that describes which ",(0,i.kt)("a",{parentName:"p",href:"test-suite"},"Test Suites")," and which ",(0,i.kt)("a",{parentName:"p",href:"test-application"},"Test Applications")," will be/are tested. "),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the Test Configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CiCd enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"If set to Yes, the Test Configuration will be executed if one of it is associated Test Applications is executed via Ci/Cd API.")))),(0,i.kt)("h2",{id:"business-rules"},"Business rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The name is mandatory."),(0,i.kt)("li",{parentName:"ul"},"The application revision of the ",(0,i.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," must be equal to the application revision of the Test Configuration, with the same ",(0,i.kt)("a",{parentName:"li",href:"application"},"Application")," in order to be able to execute the Test Configuration."),(0,i.kt)("li",{parentName:"ul"},"There can only be two ",(0,i.kt)("a",{parentName:"li",href:"test-run"},"Test Runs")," per Test Configuration that are Pinned.")),(0,i.kt)("h2",{id:"actions-on-test-configuration"},"Actions on Test Configuration"),(0,i.kt)("h3",{id:"view-test-configurations"},"View Test Configurations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to the "Test design" page in MTA to view a list of all the Test Configurations in MTA.')),(0,i.kt)("h3",{id:"create-a-new-test-configuration"},"Create a new Test Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to the "Test design" page in MTA. '),(0,i.kt)("li",{parentName:"ul"},"Add a new Test Configuration and enter a Name and optional Description. "),(0,i.kt)("li",{parentName:"ul"},"Choose whether the Test Configuration should be Ci/Cd enabled. ")),(0,i.kt)("p",null,"For more about Ci/Cd, read the How To section."),(0,i.kt)("h3",{id:"execute-a-test-configuration"},"Execute a Test Configuration"),(0,i.kt)("p",null,"There are multiple ways to execute a Test Configuration. "),(0,i.kt)("p",null,'From the "Test design" page:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on Execute on the Test Configuration you want to execute.")),(0,i.kt)("p",null,"From the Test Run overview page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on Execute on the Test Configuration you want to execute.")),(0,i.kt)("p",null,"From a ",(0,i.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click on "Execute" and go to "Test Run overview".'),(0,i.kt)("li",{parentName:"ul"},'Click "Proceed on the confirmation window".')),(0,i.kt)("p",null,"From a ",(0,i.kt)("a",{parentName:"p",href:"datavariation"},"Data Variation"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click on "Execute and go to Test Run overview".'),(0,i.kt)("li",{parentName:"ul"},'Click "Proceed on the confirmation window".')),(0,i.kt)("p",null,"From a ",(0,i.kt)("a",{parentName:"p",href:"test-run"},"Test Run"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Click on "Execute Test Configuration"')),(0,i.kt)("h3",{id:"delete-a-test-configuration"},"Delete a Test Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Go to the "Test design" page in MTA. '),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("i",{class:"fas fa-trash-alt"})," to delete the Test Configuration you want to delete.")),(0,i.kt)("p",null,"Note that Testers cannot delete Test Configurations."),(0,i.kt)("h3",{id:"restore-a-deleted-test-configuration"},"Restore a deleted Test Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Go to the "Test design" page in MTA. '),(0,i.kt)("li",{parentName:"ul"},'Go to "Deleted configurations".'),(0,i.kt)("li",{parentName:"ul"},'Click on "Recover" on the Test Configuration you want to restore.')),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 21 april 2022"))}c.isMDXComponent=!0}}]);