"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[399],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=i.createContext({}),u=function(t){var e=i.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return a?i.createElement(h,o(o({ref:e},d),{},{components:a})):i.createElement(h,o({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2028:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var i=a(3117),n=a(102),r=(a(7294),a(3905)),o=["components"],l={},s="Data Variation Item",u={unversionedId:"definitions/datavariation-item",id:"definitions/datavariation-item",title:"Data Variation Item",description:"Definition",source:"@site/docs/definitions/datavariation-item.md",sourceDirName:"definitions",slug:"/definitions/datavariation-item",permalink:"/documentation/definitions/datavariation-item",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Construction Error",permalink:"/documentation/definitions/construction-error"},next:{title:"Data Variation",permalink:"/documentation/definitions/datavariation"}},d=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on Data Variation Item",id:"actions-on-data-variation-item",children:[{value:"View Data Variation Items in a Test Suite",id:"view-data-variation-items-in-a-test-suite",children:[],level:3},{value:"View Data Variation Items in a Test Case",id:"view-data-variation-items-in-a-test-case",children:[],level:3},{value:"View the values of a Data Variation Item per Data Variation",id:"view-the-values-of-a-data-variation-item-per-data-variation",children:[],level:3},{value:"Create a Data Variation Item",id:"create-a-data-variation-item",children:[],level:3},{value:"Edit a Data Variation Item",id:"edit-a-data-variation-item",children:[],level:3},{value:"Delete a Data Variation Item",id:"delete-a-data-variation-item",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],p={toc:d};function c(t){var e=t.components,a=(0,n.Z)(t,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-variation-item"},"Data Variation Item"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Data Variation Item or variant refers to an attribute that can be varied when executing a ",(0,r.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite"),".\nData Variation Items are always part of ",(0,r.kt)("a",{parentName:"p",href:"datavariation"},"Data Variation"),".\nThe value of a Data Variation Item is defined either in an ",(0,r.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Value")," or in an ",(0,r.kt)("a",{parentName:"p",href:"assert-attribute-value"},"Assert on attribute value"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null},"There are two types of variants: ",(0,r.kt)("br",null)," - Attribute value, where an attribute is given a value. ",(0,r.kt)("br",null),' - Assert, where the value of an attribute is checked. Asserts are recognizable by the "=" sign on the Data variation page.',(0,r.kt)("br",null))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Attribute name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the attribute or assert")))),(0,r.kt)("h2",{id:"business-rules"},"Business rules"),(0,r.kt)("p",null,'None.\nNote that not entering a value will be interpreted as "Empty".'),(0,r.kt)("h2",{id:"actions-on-data-variation-item"},"Actions on Data Variation Item"),(0,r.kt)("h3",{id:"view-data-variation-items-in-a-test-suite"},"View Data Variation Items in a Test Suite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the matrix icon on top of the right pane in the test suite page. "),(0,r.kt)("li",{parentName:"ul"},"The data variation page will be opened showing all the Data Variation Items in the ",(0,r.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"),".")),(0,r.kt)("h3",{id:"view-data-variation-items-in-a-test-case"},"View Data Variation Items in a Test Case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the test suite page, click on the ",(0,r.kt)("a",{parentName:"li",href:"test-case"},"Test Case")," that has the dark coloured data variation icon next to it."),(0,r.kt)("li",{parentName:"ul"},"For each attribute and assert shown in the test step details pane on the right, if it has this same icon next to it, it indicates that they are included as a Data Variation Item.")),(0,r.kt)("h3",{id:"view-the-values-of-a-data-variation-item-per-data-variation"},"View the values of a Data Variation Item per Data Variation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"On the test suite page, click on the ",(0,r.kt)("a",{parentName:"li",href:"test-case"},"Test Case")," that has the dark coloured data variation icon next to it."),(0,r.kt)("li",{parentName:"ul"},"For each attribute and assert shown in the test step details pane on the right, if it has this same icon next to it, it indicates that they are included as a Data Variation Item."),(0,r.kt)("li",{parentName:"ul"},"Click on this icon to show the values per Data Variation.")),(0,r.kt)("h3",{id:"create-a-data-variation-item"},"Create a Data Variation Item"),(0,r.kt)("p",null,"To add an ",(0,r.kt)("a",{parentName:"p",href:"attribute-value"},"Attribute Value")," or an ",(0,r.kt)("a",{parentName:"p",href:"assert-attribute-value"},"Assert on attribute value")," as a Data Variation Item, there are two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When configuring a ",(0,r.kt)("a",{parentName:"li",href:"test-step"},"Test Step"),", click on the data variation icon next to the attribute or assert to add it to the ",(0,r.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation"),". ",(0,r.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation")," will be enabled and the respective attribute or assert will be added as a Data Variation Item."),(0,r.kt)("li",{parentName:"ol"},"With ",(0,r.kt)("a",{parentName:"li",href:"datavariation"},"Data Variation")," already enabled, go to the data variation page and click on ",(0,r.kt)("em",{parentName:"li"},"+ Attribute")," or ",(0,r.kt)("em",{parentName:"li"},"+ Assert")," to add an ",(0,r.kt)("a",{parentName:"li",href:"attribute-value"},"Attribute Value")," or an ",(0,r.kt)("a",{parentName:"li",href:"assert-attribute-value"},"Assert on attribute value")," as a Data Variation Item.")),(0,r.kt)("h3",{id:"edit-a-data-variation-item"},"Edit a Data Variation Item"),(0,r.kt)("p",null,"There are two ways to edit values in a Data Variation. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the data variation page, to edit all attributes and asserts in a Data Variation at once, click on the column you want to edit, then click on Edit."),(0,r.kt)("li",{parentName:"ol"},"From the data variation page, to edit a single attribute or assert in a Data Variation, simply click on the attribute or assert in the respective column.")),(0,r.kt)("h3",{id:"delete-a-data-variation-item"},"Delete a Data Variation Item"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From the data variation page, click on the respective attribute or assert name on the left."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("em",{parentName:"li"},"Delete"),".")),(0,r.kt)("h2",{id:"related-topics"},"Related topics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"test-run"},"Test Run"))))}c.isMDXComponent=!0}}]);