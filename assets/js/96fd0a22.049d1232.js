"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4039],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),f=c(n),m=a,h=f["".concat(l,".").concat(m)]||f[m]||p[m]||r;return n?i.createElement(h,o(o({ref:e},u),{},{components:n})):i.createElement(h,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9004:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={},l="Unit testing",c={unversionedId:"bestpractice/unittest",id:"bestpractice/unittest",title:"Unit testing",description:"Definition",source:"@site/docs/bestpractice/unittest.md",sourceDirName:"bestpractice",slug:"/bestpractice/unittest",permalink:"/bestpractice/unittest",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Process testing",permalink:"/bestpractice/processtest"},next:{title:"Current release",permalink:"/releasenotes/current"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Structure",id:"structure",level:2},{value:"Finalizing a Unit Test",id:"finalizing-a-unit-test",level:3},{value:"Tips and tricks",id:"tips-and-tricks",level:2},{value:"Feedback?",id:"feedback",level:2}],f={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unit-testing"},"Unit testing"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"In MTA it is possible to test a small piece of Mendix code, like a single microflow, following some simple rules for the tested Mendix code, and using powerful features from MTA like asserts and data variation."),(0,r.kt)("p",null,"A unit test generally does not leave traces in the Mendix app being tested, which means the result cannot be visually inspected there."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"Recommended best practice is create a draft version of a unit test that can be executed without testing other functions in the same Test Configuration. When the unit test becomes final, it is best to move it into a 'container' Test Configuration where all the unit tests for a certain Test Application are collected. This is described below. The Test Configuration can then be easily used in a regression test. "),(0,r.kt)("p",null,"A draft unit test in MTA typically looks like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"only one Test Suite;"),(0,r.kt)("li",{parentName:"ul"},"only one Test Case, where either Security is set to Off (because it's about testing the algorithm and not the User) or multiple copies of the same Test Case with different Execution Users;"),(0,r.kt)("li",{parentName:"ul"},"one or more Teststep(s) creating objects (or microflow calls creating objects);"),(0,r.kt)("li",{parentName:"ul"},"one or more Teststep(s) calling a microflow where some algorithm is performed, with the object(s) as a parameter;"),(0,r.kt)("li",{parentName:"ul"},"one Teststep retrieving the results and containing asserts.")),(0,r.kt)("p",null,"A final unit test in MTA typically looks like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'many Test Cases, completely independent from each other (not using "from previous teststep" across Test Cases);'),(0,r.kt)("li",{parentName:"ul"},"many Test Suites that represents a certain part of the software (for instance 'CRM').")),(0,r.kt)("h3",{id:"finalizing-a-unit-test"},"Finalizing a Unit Test"),(0,r.kt)("p",null,"Finalizing a Unit Test means moving it into a 'container' Test Configuration where all the unit tests for a certain Test Application are collected."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the Test Design (home)page and select the Test Configuration containing the draft unit test"),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("i",{class:"fa fa-copy"})," button on the Test Suite to copy the Test Suite"),(0,r.kt)("li",{parentName:"ol"},'Expand the "Choose another test configuration, if the test suite should not be copied to the current test configuration:" groupbox, and select the container Test Configuration as target'),(0,r.kt)("li",{parentName:"ol"},"Navigate to the container Test Configuration and open the Test Suite copy"),(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("i",{class:"fa fa-copy"})," button on the Test Case to copy the Test Case"),(0,r.kt)("li",{parentName:"ol"},'Expand the "Choose another test suite, if the test case should not be copied to the current test suite:" groupbox, and select an existing relevant Test Suite as target'),(0,r.kt)("li",{parentName:"ol"},"Navigate to the Test Design (home)page "),(0,r.kt)("li",{parentName:"ol"},"Delete the Test Configuration from step 1 using the ",(0,r.kt)("i",{class:"fa fa-trash-alt"})," button (since the actual intention was to move it, not to copy it)")),(0,r.kt)("h2",{id:"tips-and-tricks"},"Tips and tricks"),(0,r.kt)("p",null,"Below steps are optional, not mandatory, but will make it much easier to unit test."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, make sure the microflow or microflows to be tested, have a ",(0,r.kt)("strong",{parentName:"li"},"single responsibility"),". This means, if multiple calculations are performed and/or objects are mutated, split up the microflow into separate microflows. This will make it possible test only one function. "),(0,r.kt)("li",{parentName:"ul"},"If it can be avoided, ",(0,r.kt)("strong",{parentName:"li"},"do not commit")," any changes to the database in the microflows that are tested. This will make it possible to test using data that only exists in memory, which is faster, but also means it is not necessary to clean up the data afterwards. This in turn will make it easier to execute multiple times in batch or using data variation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reuse existing masterdata")," that is necessary to test, instead of creating it from scratch. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Include asserts")," to check the results, for all attributes that are subject to mutation in the microflow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create datavariation"),", to test with different values of the attributes. Make sure to also include the asserts in the datavariation. And finally, when creating multiple columns (variations) in the datavariation, only change one attribute value per variation. ")),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 21 april 2022"))}m.isMDXComponent=!0}}]);