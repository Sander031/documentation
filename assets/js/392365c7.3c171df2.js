"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6538],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(g,l(l({ref:e},u),{},{components:a})):n.createElement(g,l({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},454:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={},l="Use a previous teststep's data",s={unversionedId:"use-previous-teststeps-data",id:"use-previous-teststeps-data",title:"Use a previous teststep's data",description:"Definition",source:"@site/additional/01-howtos/use-previous-teststeps-data.md",sourceDirName:".",slug:"/use-previous-teststeps-data",permalink:"/additional/howtos/use-previous-teststeps-data",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Nanoflows",permalink:"/additional/howtos/test-nanoflows"},next:{title:"Use a Test Suite variable",permalink:"/additional/howtos/use-test-suite-variable"}},o={},p=[{value:"Definition",id:"definition",level:2},{value:"Scenario",id:"scenario",level:2},{value:"Usage",id:"usage",level:2},{value:"Using Primitives",id:"using-primitives",level:3},{value:"Using Enumerations",id:"using-enumerations",level:3},{value:"Using Objects",id:"using-objects",level:3},{value:"Using values within Objects",id:"using-values-within-objects",level:3},{value:"Feedback?",id:"feedback",level:2}],u={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-a-previous-teststeps-data"},"Use a previous teststep's data"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"This document describes how MTA handles data from one teststep to another."),(0,r.kt)("h2",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"In MTA it is possible to use the output of one teststep, to pass data to another teststep."),(0,r.kt)("p",null,'Let\'s assume there is a generic teststep "A" and another teststep "B". B uses the data from A. A returns either a primitive or an object. Primitive values are either a String, Integer, Long, Decimal, Datetime or Boolean. There are a couple scenarios how B can use A\'s data:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("th",{parentName:"tr",align:null},"Teststep A is a"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns a"),(0,r.kt)("th",{parentName:"tr",align:null},"Teststep B is a"),(0,r.kt)("th",{parentName:"tr",align:null},"Uses data to"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Primitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill primitive input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Primitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill attribute value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Enumeration"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill enumeration input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Enumeration"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill attribute value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill object input parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Change, Delete or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Perform Change, Delete or Retrieve on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill association")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Change, Delete or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Perform Change, Delete or Retrieve on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill association")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10 (N/A)"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill attribute value from within object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11 (N/A)"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill primitive/enum input parameter from within object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12 (N/A)"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill attribute value from within object from within object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13 (N/A)"),(0,r.kt)("td",{parentName:"tr",align:null},"Create, Change or Retrieve Object teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Microflow teststep"),(0,r.kt)("td",{parentName:"tr",align:null},"Fill primitive/enum input parameter")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"using-primitives"},"Using Primitives"),(0,r.kt)("p",null,'For Scenarios 1 and 2, the data is copied to MTA whenever executing the test. This means that it is possible to have teststep "A" in one Test Case, and "B" in the next Test Case.\nFurthermore, because primitives are the same for all Mendix Apps, it is possible to use different Applications for the Test Cases: have one Test Case test App "ABC" and have the other Test Case test "XYZ". '),(0,r.kt)("h3",{id:"using-enumerations"},"Using Enumerations"),(0,r.kt)("p",null,'For Scenarios 3 and 4, the data is also copied to MTA whenever executing the test. However Enumerations are App-specific. This means that it is possible to have teststep "A" in one Test Case, and "B" in the next Test Case, but both Test Cases need to test the same Application.'),(0,r.kt)("h3",{id:"using-objects"},"Using Objects"),(0,r.kt)("p",null,"For Scenarios 5 - 9 the data is not copied to MTA whenever executing the test. Instead, MTA uses the Object's ID to refer to the Object in-memory. Consequentually whenever retrieving data, regardless of which Teststep is being used to retrieve from, always the latest state of that object will be retrieved."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Beware that when changing an Object after retrieving it, if you retrieve it again from that same teststep, it will still be changed!")),(0,r.kt)("h3",{id:"using-values-within-objects"},"Using values within Objects"),(0,r.kt)("p",null,"Lastly scenario's 10 - 13 are currently ",(0,r.kt)("em",{parentName:"p"},"not yet supported"),". It is necessary to write a microflow instead to retrieve the primitive value from the object."),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 23 february 2023"))}d.isMDXComponent=!0}}]);