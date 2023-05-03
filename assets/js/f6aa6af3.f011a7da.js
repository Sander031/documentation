"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={},s="Unit testing",o={unversionedId:"unittest",id:"unittest",title:"Unit testing",description:"Definition",source:"@site/additional/02-bestpractice/unittest.md",sourceDirName:".",slug:"/unittest",permalink:"/additional/bestpractice/unittest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test plan",permalink:"/additional/bestpractice/testplan"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Structure",id:"structure",level:2},{value:"Tips and tricks",id:"tips-and-tricks",level:2},{value:"Feedback?",id:"feedback",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unit-testing"},"Unit testing"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"In MTA it is possible to test a small piece of Mendix code, like a single microflow, following some simple rules for the tested Mendix code, and using powerful features from MTA like asserts and data variation."),(0,a.kt)("p",null,"A unit test generally does not leave traces in the Mendix app being tested, which means the result cannot be visually inspected there."),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,"Recommended best practice is create a draft version of a unit test that can be executed without testing other functions in the same Test Configuration. When the unit test becomes final, it is best to move it into a 'container' Test Configuration where all the unit tests for a certain Test Application are collected. This is described below. The Test Configuration can then be easily used in a regression test. "),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"draft"),' "Unit Test" Test Configuration in MTA typically looks like this:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"only one Test Suite;"),(0,a.kt)("li",{parentName:"ul"},"only one Test Case, where either Security is set to Off (because it's about testing the algorithm and not the User) or multiple copies of the same Test Case with different Execution Users;"),(0,a.kt)("li",{parentName:"ul"},"one or more Teststep(s) creating objects (or microflow calls creating objects);"),(0,a.kt)("li",{parentName:"ul"},"one or more Teststep(s) calling a microflow where some algorithm is performed, with the object(s) as a parameter;"),(0,a.kt)("li",{parentName:"ul"},"one Teststep retrieving the results and containing asserts.")),(0,a.kt)("p",null,"Finalizing a Unit Test means moving it into a 'container' Test Configuration where all the unit tests for a certain Test Application are collected. The process is basically copying the Test Suite into an existing Test Configuration, and subsequently copying the Test Case into an existing Test Suite. This is described in the ",(0,a.kt)("a",{parentName:"p",href:"../howtos/store-test-case-to-collection"},"Howto: Store Test Case to collection"),"."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"finalized"),' "Unit Test" Test Configuration in MTA typically looks like this:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"many Test Suites, where each Test Suite represents a certain part of the software, like a Module in the Mendix project."),(0,a.kt)("li",{parentName:"ul"},'many Test Cases per Test Suite, completely independent from each other (not using "from previous teststep" across Test Cases);')),(0,a.kt)("h2",{id:"tips-and-tricks"},"Tips and tricks"),(0,a.kt)("p",null,"Below steps are optional, not mandatory, but will make it much easier to unit test."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, make sure the microflow or microflows to be tested, have a ",(0,a.kt)("strong",{parentName:"li"},"single responsibility"),". This means, if multiple calculations are performed and/or objects are mutated, split up the microflow into separate microflows. This will make it possible test only one function. "),(0,a.kt)("li",{parentName:"ul"},"If it can be avoided, ",(0,a.kt)("strong",{parentName:"li"},"do not commit")," any changes to the database in the microflows that are tested. This will make it possible to test using data that only exists in memory, which is faster, but also means it is not necessary to clean up the data afterwards. This in turn will make it easier to execute multiple times in batch or using data variation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reuse existing masterdata")," that is necessary to test, instead of creating it from scratch. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Include asserts")," to check the results, for all attributes that are subject to mutation in the microflow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Create datavariation"),", to test with different values of the attributes. Make sure to also include the asserts in the datavariation. And finally, when creating multiple columns (variations) in the datavariation, only change one attribute value per variation. ")),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 21 april 2022"))}m.isMDXComponent=!0}}]);