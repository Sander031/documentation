"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[829],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,k=f["".concat(u,".").concat(d)]||f[d]||p[d]||r;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={},u="Test Configuration",s={unversionedId:"refguide/test-configuration",id:"refguide/test-configuration",title:"Test Configuration",description:"This document is based on MTA version 1.6.",source:"@site/docs/refguide/test-configuration.md",sourceDirName:"refguide",slug:"/refguide/test-configuration",permalink:"/refguide/test-configuration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Case",permalink:"/refguide/test-case"},next:{title:"Test Instruction",permalink:"/refguide/test-instruction"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Test Configuration",id:"actions-on-test-configuration",level:2},{value:"View Test Configurations",id:"view-test-configurations",level:3},{value:"Create a new Test Configuration",id:"create-a-new-test-configuration",level:3},{value:"Execute a Test Configuration",id:"execute-a-test-configuration",level:3},{value:"Delete a Test Configuration",id:"delete-a-test-configuration",level:3},{value:"Restore a deleted Test Configuration",id:"restore-a-deleted-test-configuration",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-configuration"},"Test Configuration"),(0,r.kt)("p",null,"This document is based on MTA version 1.6."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"A Test Configuration is an executable test script that describes which ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suites")," and which ",(0,r.kt)("a",{parentName:"p",href:"test-application"},"Test Applications")," will be/are tested. "),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Test Configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CiCd enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If set to Yes, the Test Configuration will be executed if one of it is associated Test Applications is executed via Ci/Cd API.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The name is mandatory."),(0,r.kt)("li",{parentName:"ul"},"The application revision of the ",(0,r.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," must be equal to the application revision of the Test Configuration, with the same ",(0,r.kt)("a",{parentName:"li",href:"application"},"Application")," in order to be able to execute the Test Configuration."),(0,r.kt)("li",{parentName:"ul"},"There can only be two ",(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test Runs")," per Test Configuration that are Pinned.")),(0,r.kt)("h2",{id:"actions-on-test-configuration"},"Actions on Test Configuration"),(0,r.kt)("h3",{id:"view-test-configurations"},"View Test Configurations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Test design" page in MTA to view a list of all the Test Configurations in MTA.')),(0,r.kt)("h3",{id:"create-a-new-test-configuration"},"Create a new Test Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Navigate to the "Test design" page in MTA. '),(0,r.kt)("li",{parentName:"ul"},"Add a new Test Configuration and enter a Name and optional Description. "),(0,r.kt)("li",{parentName:"ul"},"Choose whether the Test Configuration should be Ci/Cd enabled. ")),(0,r.kt)("p",null,"For more about Ci/Cd, read the How To section."),(0,r.kt)("h3",{id:"execute-a-test-configuration"},"Execute a Test Configuration"),(0,r.kt)("p",null,"There are multiple ways to execute a Test Configuration. "),(0,r.kt)("p",null,'From the "Test design" page:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on Execute on the Test Configuration you want to execute.")),(0,r.kt)("p",null,"From the Test Run overview page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on Execute on the Test Configuration you want to execute.")),(0,r.kt)("p",null,"From a ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click on "Execute" and go to "Test Run overview".'),(0,r.kt)("li",{parentName:"ul"},'Click "Proceed on the confirmation window".')),(0,r.kt)("p",null,"From a ",(0,r.kt)("a",{parentName:"p",href:"datavariation"},"Data Variation"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click on "Execute and go to Test Run overview".'),(0,r.kt)("li",{parentName:"ul"},'Click "Proceed on the confirmation window".')),(0,r.kt)("p",null,"From a ",(0,r.kt)("a",{parentName:"p",href:"test-run"},"Test Run"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click on "Execute Test Configuration"')),(0,r.kt)("h3",{id:"delete-a-test-configuration"},"Delete a Test Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Go to the "Test design" page in MTA. '),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," to delete the Test Configuration you want to delete.")),(0,r.kt)("p",null,"Note that Testers cannot delete Test Configurations."),(0,r.kt)("h3",{id:"restore-a-deleted-test-configuration"},"Restore a deleted Test Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Go to the "Test design" page in MTA. '),(0,r.kt)("li",{parentName:"ul"},'Go to "Deleted configurations".'),(0,r.kt)("li",{parentName:"ul"},'Click on "Recover" on the Test Configuration you want to restore.')),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 21 april 2022"))}d.isMDXComponent=!0}}]);