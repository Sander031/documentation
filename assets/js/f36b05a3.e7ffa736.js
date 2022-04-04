"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[114],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var i=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),u=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=u(t.components);return i.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=u(n),h=r,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(f,s(s({ref:e},c),{},{components:n})):i.createElement(f,s({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7355:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),s=["components"],o={},l="Test Instruction",u={unversionedId:"definitions/test-instruction",id:"definitions/test-instruction",title:"Test Instruction",description:"Definition",source:"@site/docs/definitions/test-instruction.md",sourceDirName:"definitions",slug:"/definitions/test-instruction",permalink:"/definitions/test-instruction",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Configuration",permalink:"/definitions/test-configuration"},next:{title:"Test Run",permalink:"/definitions/test-run"}},c=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on Test Instruction",id:"actions-on-test-instruction",children:[{value:"View Test Instructions in a Test Case",id:"view-test-instructions-in-a-test-case",children:[],level:3},{value:"View Test Instruction details",id:"view-test-instruction-details",children:[],level:3},{value:"Create a Test Instruction",id:"create-a-test-instruction",children:[],level:3},{value:"Change the order of a Test Instruction in a Test Case",id:"change-the-order-of-a-test-instruction-in-a-test-case",children:[],level:3},{value:"Edit a Test Instruction",id:"edit-a-test-instruction",children:[],level:3},{value:"Delete a Test Instruction",id:"delete-a-test-instruction",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],p={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,s);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-instruction"},"Test Instruction"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"A Test Instruction is a descriptive counterpart of a ",(0,a.kt)("a",{parentName:"p",href:"test-step"},"Test Step"),". A Test Instruction is always part of a ",(0,a.kt)("a",{parentName:"p",href:"test-case"},"Test Case")," that has the Manual type."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Title"),(0,a.kt)("td",{parentName:"tr",align:null},"The title of the Test Instruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description"),(0,a.kt)("td",{parentName:"tr",align:null},"A description of a Test Instruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Highlight"),(0,a.kt)("td",{parentName:"tr",align:null},"This indicates whether to visually highlight the Test Instruction in the Test Case to draw attention to it.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Input data"),(0,a.kt)("td",{parentName:"tr",align:null},"A description of the input data for a Test Instruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Expected result"),(0,a.kt)("td",{parentName:"tr",align:null},"A description of the expected result of a Test Instruction.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Image"),(0,a.kt)("td",{parentName:"tr",align:null},"A descriptive image (for instance, png or jpg file) that shows the expected outcome of the Test Instruction.")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The title is mandatory.")),(0,a.kt)("h2",{id:"actions-on-test-instruction"},"Actions on Test Instruction"),(0,a.kt)("h3",{id:"view-test-instructions-in-a-test-case"},"View Test Instructions in a Test Case"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the ",(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," that the Test Instructions are in."),(0,a.kt)("li",{parentName:"ul"},"Click on the Manual Test Case to view the Test Instructions."),(0,a.kt)("li",{parentName:"ul"},"Test Instructions are shown in the middle pane.")),(0,a.kt)("h3",{id:"view-test-instruction-details"},"View Test Instruction details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the Test Suite that the Test Instructions are in."),(0,a.kt)("li",{parentName:"ul"},"Click on the Manual Test Case to view the Test Instructions."),(0,a.kt)("li",{parentName:"ul"},"Select the Test Instruction to view."),(0,a.kt)("li",{parentName:"ul"},"Details of the Test Instruction are shown on the right pane.")),(0,a.kt)("h3",{id:"create-a-test-instruction"},"Create a Test Instruction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the Test Suite and select the Manual Test Case that you want to create a Test Instruction in."),(0,a.kt)("li",{parentName:"ul"},'Click "',(0,a.kt)("em",{parentName:"li"},"+ Test Instruction"),'" to create a Test Instruction.'),(0,a.kt)("li",{parentName:"ul"},"Enter the Title and some optional information and select an optional Image."),(0,a.kt)("li",{parentName:"ul"},'Choose "Save".')),(0,a.kt)("h3",{id:"change-the-order-of-a-test-instruction-in-a-test-case"},"Change the order of a Test Instruction in a Test Case"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Manual Test Case that the Test Instruction is in."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fas fa-arrow-up"})," or ",(0,a.kt)("i",{class:"fas fa-arrow-down"})," on the left of the name of the Test Instruction to move it up or down.")),(0,a.kt)("h3",{id:"edit-a-test-instruction"},"Edit a Test Instruction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("i",{class:"fa fa-pencil"})," next to the Test Instruction name to edit the Title or other information, or to Highlight the Test Instruction.")),(0,a.kt)("h3",{id:"delete-a-test-instruction"},"Delete a Test Instruction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the Manual Test Case that the Test Instruction is in."),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("i",{class:"fas fa-trash-alt"})," on the Test Instruction you want to delete.")),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-step"},"Test Step")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))))}d.isMDXComponent=!0}}]);