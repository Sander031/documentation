"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[323],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4650:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={},u="Microflow parameter value",p={unversionedId:"definitions/microflow-parameter-value",id:"definitions/microflow-parameter-value",title:"Microflow parameter value",description:"Definition",source:"@site/docs/definitions/microflow-parameter-value.md",sourceDirName:"definitions",slug:"/definitions/microflow-parameter-value",permalink:"/documentation/definitions/microflow-parameter-value",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data variation",permalink:"/documentation/definitions/datavariation"},next:{title:"Test Application",permalink:"/documentation/definitions/test application"}},s=[{value:"Definition",id:"definition",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Business rules",id:"business-rules",children:[],level:2},{value:"Actions on ...",id:"actions-on-",children:[{value:"View ...",id:"view-",children:[],level:3}],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"microflow-parameter-value"},"Microflow parameter value"),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"The microflow parameter value contains the value for a Microflow input parameter on a Microflow test step."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the input parameter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Datatype"),(0,a.kt)("td",{parentName:"tr",align:null},"Datatype of the input parameter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Input type"),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates how the value is specified; manually by the user, or through the output of a former test step")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Value"),(0,a.kt)("td",{parentName:"tr",align:null},"The value of the input parameter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Differ status"),(0,a.kt)("td",{parentName:"tr",align:null},"The differstatus indicates how the attribute value is changed since the previous application revision. Can be either ",(0,a.kt)("br",null)," - Obsolete: the attribute does not exist in current application revision and does exist in previous application revision ",(0,a.kt)("br",null)," - New: the attribute does exist in current application revision and does not exist in previous application revision ",(0,a.kt)("br",null)," - Unchanged: the attribute is not changed between application revisions (f.i. name or datatype is changed) ",(0,a.kt)("br",null)," - Changed: the attribute exists in both current and previous application revisions and is changed")))),(0,a.kt)("h2",{id:"business-rules"},"Business rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the input type is Former test step, a former test step must be selected in order to be able to execute the test configuration  ")),(0,a.kt)("p",null,'Note that if a Value on Microflow parameter value is not set, this means the input parameter will be set to "Empty" when executing the test. '),(0,a.kt)("h2",{id:"actions-on-"},"Actions on ..."),(0,a.kt)("h3",{id:"view-"},"View ..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("h2",{id:"related-topics"},"Related topics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-suite"},"Test suite")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"test-run"},"Test run"))))}d.isMDXComponent=!0}}]);