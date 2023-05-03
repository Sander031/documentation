"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||s;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4111:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={},i="Assert",o={unversionedId:"Assert/index",id:"Assert/index",title:"Assert",description:"Definition",source:"@site/docs/Assert/index.md",sourceDirName:"Assert",slug:"/Assert/",permalink:"/Assert/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Application Revision",permalink:"/application-revision"},next:{title:"Assert on Attribute",permalink:"/Assert/assert-attribute"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Actions on Assert",id:"actions-on-assert",level:2},{value:"View Asserts on Attribute, Microflow output or Object count",id:"view-asserts-on-attribute-microflow-output-or-object-count",level:3},{value:"View Asserts on Validation feedback",id:"view-asserts-on-validation-feedback",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"assert"},"Assert"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"An Assert is a claim that a certain fact has to be true.\nAsserts are defined on the ",(0,a.kt)("a",{parentName:"p",href:"../Teststep"},"Teststep")," or ",(0,a.kt)("a",{parentName:"p",href:"../test-case"},"Test Case")," level to check during test execution, if a certain output matches a given value."),(0,a.kt)("p",null,"Each Assert is evaluated after the execution of a Teststep or Test Case. The evaluation will fail when the evaluated value does not match to the defined expectation, but the execution will continue. "),(0,a.kt)("p",null,"Read more about dealing with failed ",(0,a.kt)("a",{parentName:"p",href:"test-run"},"Test Runs")," in the How To section."),(0,a.kt)("p",null,"There are four types of Asserts, that are described in detail in separate pages:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"Assert/assert-attribute"},"Assert on Attribute")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"Assert/assert-microflow-output"},"Assert on Microflow output")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"Assert/assert-object-count"},"Assert on Object count")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"Assert/assert-validation-feedback"},"Assert on Validation feedback"))),(0,a.kt)("h2",{id:"actions-on-assert"},"Actions on Assert"),(0,a.kt)("p",null,"Some actions are described in the pages shown above."),(0,a.kt)("h3",{id:"view-asserts-on-attribute-microflow-output-or-object-count"},"View Asserts on Attribute, Microflow output or Object count"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the Test Configuration and ",(0,a.kt)("a",{parentName:"li",href:"../test-suite"},"Test Suite")," that you want to design."),(0,a.kt)("li",{parentName:"ul"},"Teststeps in a ",(0,a.kt)("a",{parentName:"li",href:"../test-case"},"Test Case"),' with one or more Assert, are marked with "',(0,a.kt)("i",{class:"fas fa-ballot-check"}),'" in the list of Teststeps.'),(0,a.kt)("li",{parentName:"ul"},'Click on the "',(0,a.kt)("i",{class:"fas fa-ellipsis"}),'" button on the Teststep and click "',(0,a.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured.   ')),(0,a.kt)("h3",{id:"view-asserts-on-validation-feedback"},"View Asserts on Validation feedback"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the Test Configuration and Test Suite that you want to design."),(0,a.kt)("li",{parentName:"ul"},'Test Cases in a Test Suite with one or more Assert, are marked with "',(0,a.kt)("i",{class:"fas fa-ballot-check"}),'" in the list of Test Cases.'),(0,a.kt)("li",{parentName:"ul"},'Click on the "',(0,a.kt)("i",{class:"fas fa-ellipsis"}),'" button on the Test Case and click "',(0,a.kt)("i",{class:"fal fa-ballot-check"}),' Edit asserts" to open the page where asserts can be configured.')))}f.isMDXComponent=!0}}]);