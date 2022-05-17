"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8444],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),h=i,f=d["".concat(o,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,s(s({ref:e},c),{},{components:n})):r.createElement(f,s({ref:e},c))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,s=new Array(a);s[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:i,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1475:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),s=["components"],l={},o="Test Instruction",u={unversionedId:"refguide/test-instruction",id:"refguide/test-instruction",title:"Test Instruction",description:"This document is based on MTA version 1.6.",source:"@site/docs/refguide/test-instruction.md",sourceDirName:"refguide",slug:"/refguide/test-instruction",permalink:"/refguide/test-instruction",tags:[],version:"current",lastUpdatedAt:1652783337,formattedLastUpdatedAt:"5/17/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Configuration",permalink:"/refguide/test-configuration"},next:{title:"Test Run",permalink:"/refguide/test-run"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on Test Instruction",id:"actions-on-test-instruction",children:[{value:"View Test Instructions in a Test Case",id:"view-test-instructions-in-a-test-case",children:[],level:3},{value:"View Test Instruction details",id:"view-test-instruction-details",children:[],level:3},{value:"Create a Test Instruction",id:"create-a-test-instruction",children:[],level:3},{value:"Change the order of a Test Instruction in a Test Case",id:"change-the-order-of-a-test-instruction-in-a-test-case",children:[],level:3},{value:"Edit a Test Instruction",id:"edit-a-test-instruction",children:[],level:3},{value:"Delete a Test Instruction",id:"delete-a-test-instruction",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2},{value:"Feedback?",id:"feedback",children:[],level:2}],p={toc:c};function d(t){var e=t.components,n=(0,i.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-instruction"},"Test Instruction"),(0,a.kt)("p",null,"This document is based on MTA version 1.6."),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A Test Instruction is a descriptive counterpart of a ",(0,a.kt)("a",{parentName:"p",href:"teststep"},"Teststep"),". A Test Instruction is always part of a ",(0,a.kt)("a",{parentName:"p",href:"test-case"},"Test Case")," that has the Manual type."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Title"),(0,a.kt)("td",{parentName:"tr",align:null},"The title of the Test Instruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description"),(0,a.kt)("td",{parentName:"tr",align:null},"A description of a Test Instruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Highlight"),(0,a.kt)("td",{parentName:"tr",align:null},"This indicates whether to visually highlight the Test Instruction in the Test Case to draw attention to it.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Input data"),(0,a.kt)("td",{parentName:"tr",align:null},"A description of the input data for a Test Instruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Expected result"),(0,a.kt)("td",{parentName:"tr",align:null},"A description of the expected result of a Test Instruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Image"),(0,a.kt)("td",{parentName:"tr",align:null},"A descriptive image (for instance, png or jpg file) that shows the expected outcome of the Test Instruction.")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The title is mandatory.")),(0,a.kt)("h2",{id:"actions-on-test-instruction"},"Actions on Test Instruction"),(0,a.kt)("h3",{id:"view-test-instructions-in-a-test-case"},"View Test Instructions in a Test Case"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the ",(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," that the Test Instructions are in."),(0,a.kt)("li",{parentName:"ul"},"Click on the Manual Test Case to view the Test Instructions."),(0,a.kt)("li",{parentName:"ul"},"Test Instructions are shown in the middle pane.")),(0,a.kt)("h3",{id:"view-test-instruction-details"},"View Test Instruction details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the Test Suite that the Test Instructions are in."),(0,a.kt)("li",{parentName:"ul"},"Click on the Manual Test Case to view the Test Instructions."),(0,a.kt)("li",{parentName:"ul"},"Select the Test Instruction to view."),(0,a.kt)("li",{parentName:"ul"},"Details of the Test Instruction are shown on the right pane.")),(0,a.kt)("h3",{id:"create-a-test-instruction"},"Create a Test Instruction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Manual Test Case that you want to create a Test Instruction in."),(0,a.kt)("li",{parentName:"ul"},'Click "',(0,a.kt)("em",{parentName:"li"},"+ Test Instruction"),'" to create a Test Instruction.'),(0,a.kt)("li",{parentName:"ul"},"Enter the Title and some optional information and select an optional Image."),(0,a.kt)("li",{parentName:"ul"},'Choose "Save".')),(0,a.kt)("h3",{id:"change-the-order-of-a-test-instruction-in-a-test-case"},"Change the order of a Test Instruction in a Test Case"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Manual Test Case that the Test Instruction is in."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fas fa-arrow-up"})," or ",(0,a.kt)("i",{class:"fas fa-arrow-down"})," on the left of the name of the Test Instruction to move it up or down.")),(0,a.kt)("h3",{id:"edit-a-test-instruction"},"Edit a Test Instruction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fa fa-pencil"})," next to the Test Instruction name to edit the Title or other information, or to Highlight the Test Instruction.")),(0,a.kt)("h3",{id:"delete-a-test-instruction"},"Delete a Test Instruction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Manual Test Case that the Test Instruction is in."),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("i",{class:"fas fa-trash-alt"})," on the Test Instruction you want to delete.")),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"teststep"},"Teststep")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,a.kt)("h2",{id:"feedback"},"Feedback?"),(0,a.kt)("p",null,"Missing anything? ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,a.kt)("p",null,"Last updated 21 april 2022"))}d.isMDXComponent=!0}}]);