"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6445],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return m}});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=i.createContext({}),s=function(t){var e=i.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return i.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=s(a),m=n,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return a?i.createElement(f,l(l({ref:e},p),{},{components:a})):i.createElement(f,l({ref:e},p))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9167:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var i=a(3117),n=a(102),r=(a(7294),a(3905)),l=["components"],o={},u="Data Variation",s={unversionedId:"refguide/datavariation",id:"refguide/datavariation",title:"Data Variation",description:"This document is based on MTA version 1.6.",source:"@site/docs/refguide/datavariation.md",sourceDirName:"refguide",slug:"/refguide/datavariation",permalink:"/refguide/datavariation",tags:[],version:"current",lastUpdatedAt:1652783337,formattedLastUpdatedAt:"5/17/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Variation Item",permalink:"/refguide/datavariation-item"},next:{title:"Microflow Parameter Value",permalink:"/refguide/microflow-parameter-value"}},p=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on Data Variation",id:"actions-on-data-variation",children:[{value:"Enable Data Variation",id:"enable-data-variation",children:[],level:3},{value:"Disable Data Variation",id:"disable-data-variation",children:[],level:3},{value:"Add a Data Variation",id:"add-a-data-variation",children:[],level:3},{value:"Delete a Data Variation",id:"delete-a-data-variation",children:[],level:3},{value:"Edit a Data Variation",id:"edit-a-data-variation",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2},{value:"Feedback?",id:"feedback",children:[],level:2}],d={toc:p};function c(t){var e=t.components,a=(0,n.Z)(t,l);return(0,r.kt)("wrapper",(0,i.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-variation"},"Data Variation"),(0,r.kt)("p",null,"This document is based on MTA version 1.6."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Data Variation is used to execute the same ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite")," multiple times upon ",(0,r.kt)("a",{parentName:"p",href:"test-configuration"},"Test Configuration")," execution, but each time with different values for variant items, such as ",(0,r.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Values")," or input and output parameters. These variant items need to be explicitly included in the Data Variation to be able to vary them per ",(0,r.kt)("a",{parentName:"p",href:"test-run"},"Test Run"),". For each data variation of a ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),", a ",(0,r.kt)("a",{parentName:"p",href:"test-run"},"Test Run")," will be created."),(0,r.kt)("p",null,"Data Variation consists of ",(0,r.kt)("a",{parentName:"p",href:"datavariation-item"},"Data Variation Items")," or variants."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The rank of the Data Variation in the execution order of the Test Suite.")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("p",null,"None.\nNote that it is possible to have a data variation that does not consist of data variation items. This happens when all data variation items are deleted. The result is that the ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite")," will simply be ran multiple times but with the exact same data."),(0,r.kt)("h2",{id:"actions-on-data-variation"},"Actions on Data Variation"),(0,r.kt)("h3",{id:"enable-data-variation"},"Enable Data Variation"),(0,r.kt)("p",null,"There are two ways to enable Data Variation on a ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("i",{class:"fas fa-table"})," on top of the right pane in the Test Suite page. The data variation page will open and the icon color will turn dark, meaning Data Variation is enabled."),(0,r.kt)("li",{parentName:"ol"},"When configuring a ",(0,r.kt)("a",{parentName:"li",href:"teststep"},"Teststep"),", click on ",(0,r.kt)("i",{class:"fas fa-table"})," next to the attribute or assert to add it to the Data Variation. Data Variation will be enabled and the respective attribute or assert will be added as a ",(0,r.kt)("a",{parentName:"li",href:"datavariation-item"},"Data Variation Item"),".")),(0,r.kt)("h3",{id:"disable-data-variation"},"Disable Data Variation"),(0,r.kt)("p",null,"To completely remove all Data Variation Items and also remove all Data Variations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-table"})," on top of the right pane in the Test Suite page."),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-trash-alt"})," on top of the list of Data Variation Items.")),(0,r.kt)("h3",{id:"add-a-data-variation"},"Add a Data Variation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-table"})," on top of the right pane in the Test Suite page. The data variation page will open."),(0,r.kt)("li",{parentName:"ul"},"Click on the column of the Data Variation you want to create a copy from, for instance the column labeled ",(0,r.kt)("em",{parentName:"li"},"# 1"),". "),(0,r.kt)("li",{parentName:"ul"},'Click "',(0,r.kt)("em",{parentName:"li"},"Copy"),'".')),(0,r.kt)("h3",{id:"delete-a-data-variation"},"Delete a Data Variation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("i",{class:"fas fa-table"})," on top of the right pane in the Test Suite page. The data variation page will open."),(0,r.kt)("li",{parentName:"ul"},"Click on the column of the Data Variation you want to delete, for instance the column labeled ",(0,r.kt)("em",{parentName:"li"},"# 2"),". "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("i",{class:"fas fa-trash-alt"}),".")),(0,r.kt)("p",null,"Note that you cannot delete the first column labeled ",(0,r.kt)("em",{parentName:"p"},"# 1"),"."),(0,r.kt)("h3",{id:"edit-a-data-variation"},"Edit a Data Variation"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"datavariation-item#edit-a-data-variation-item"},"Edit a Data Variation Item"),"."),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"assert-attribute-value"},"Assert Attribute Value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"attribute-value"},"Attribute Value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"datavariation-item"},"Data Variation Items")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test Run")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 21 april 2022"))}c.isMDXComponent=!0}}]);