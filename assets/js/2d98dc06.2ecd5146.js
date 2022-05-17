"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8307],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(a),k=r,c=m["".concat(s,".").concat(k)]||m[k]||p[k]||l;return a?n.createElement(c,i(i({ref:e},d),{},{components:a})):n.createElement(c,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1093:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},s="Current release",u={unversionedId:"releasenotes/current",id:"releasenotes/current",title:"Current release",description:"Release 1.6",source:"@site/docs/releasenotes/000-current.md",sourceDirName:"releasenotes",slug:"/releasenotes/current",permalink:"/releasenotes/current",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Unit testing",permalink:"/bestpractice/unittest"},next:{title:"Release 1.5",permalink:"/releasenotes/v0015"}},d={},p=[{value:"Release 1.6",id:"release-16",level:2},{value:"Release date",id:"release-date",level:4},{value:"Supported Mendix versions",id:"supported-mendix-versions",level:4},{value:"Highlights in this release",id:"highlights-in-this-release",level:2},{value:"New functionality",id:"new-functionality",level:2},{value:"Bug fixes",id:"bug-fixes",level:2}],m={toc:p};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"current-release"},"Current release"),(0,l.kt)("h2",{id:"release-16"},"Release 1.6"),(0,l.kt)("h4",{id:"release-date"},"Release date"),(0,l.kt)("p",null,"5 may 2022"),(0,l.kt)("h4",{id:"supported-mendix-versions"},"Supported Mendix versions"),(0,l.kt)("p",null,"Menditect supports the Mendix Long-Term Support Version (LTS) and Medium-Term Support Version (MTS)."),(0,l.kt)("h2",{id:"highlights-in-this-release"},"Highlights in this release"),(0,l.kt)("ul",null,(0,l.kt)("i",{class:"fas fa-fire"}),"  We have made significant improvements in the ",(0,l.kt)("a",{href:"../refguide/recording"},"Recorder")," functionality.",(0,l.kt)("ul",null,(0,l.kt)("li",null,"It is now possible to record microflows but also record create, change and retrieve object actions, and have MTA create Teststeps from these actions. "),(0,l.kt)("li",null,"When creating a new Recording, it is no longer necessary to choose which steps to create. "),(0,l.kt)("li",null,"All the detected user actions will automatically result in one or more Teststeps in the Test Case. "),(0,l.kt)("li",null,"In this version, the Recording is also given two parameters that can be set; the maximum duration of the recording, and the maximum amount of detected user actions. This is to prevent long running of recordings as a result of an unefficent flow in the Mendix code. "),(0,l.kt)("li",null,"Read more about recordings in the ",(0,l.kt)("a",{href:"../howtos/record-user-actions"},"How to")," section!"),(0,l.kt)("li",null,"Because Recording is still in Beta, we have included a separate support form just for enthousiasts using this brand new feature. ",(0,l.kt)("br",null),"We welcome your feedback!"))),(0,l.kt)("ul",null,(0,l.kt)("i",{class:"fas fa-fire"}),"  It is now possible to add a ",(0,l.kt)("a",{href:"../refguide/teststep"},"Teststep")," between existing Teststeps!",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Choose if you want to create the Teststep before, or after the selected Teststep."),(0,l.kt)("li",null,"This is a much requested feature especially when you need to set your associations."))),(0,l.kt)("ul",null,(0,l.kt)("i",{class:"fas fa-fire"}),"  When a ",(0,l.kt)("a",{href:"../refguide/microflow-parameter-value"},"Microflow input parameter")," is an Object, it is now possible to set the value to Empty using the ",(0,l.kt)("svg",{role:"img",viewBox:"0 0 512 512",width:"2%",height:"2%",xmlns:"http://www.w3.org/2000/svg"},(0,l.kt)("path",{fill:"currentColor",d:"M491.3 20.69c-6.25-6.25-16.38-6.25-22.62 0L391.2 98.15C354.8 66.96 307.7 48 256 48C141.1 48 48 141.1 48 256c0 51.68 18.96 98.85 50.15 135.2l-77.46 77.46c-6.25 6.25-6.25 16.38 0 22.62C23.81 494.4 27.91 496 32 496s8.188-1.562 11.31-4.688l77.46-77.46C157.2 445 204.3 464 256 464c114.9 0 208-93.13 208-208c0-51.68-18.96-98.85-50.15-135.2l77.46-77.46C497.6 37.06 497.6 26.94 491.3 20.69zM80 256c0-97.05 78.95-176 176-176c42.78 0 82.01 15.37 112.5 40.83L120.8 368.5C95.37 338 80 298.8 80 256zM432 256c0 97.05-78.95 176-176 176c-42.78 0-82.01-15.37-112.5-40.83l247.7-247.7C416.6 173.1 432 213.2 432 256z",class:""}))," button."),(0,l.kt)("ul",null,(0,l.kt)("i",{class:"fas fa-fire"}),"  Microflow input parameters can now be added as an item in the ",(0,l.kt)("a",{href:"../refguide/datavariation"},"Datavariation"),"."),(0,l.kt)("ul",null,(0,l.kt)("i",{class:"fas fa-fire"}),"  A List of objects can now be filled with objects from the output of multiple Teststeps."),(0,l.kt)("ul",null,(0,l.kt)("i",{class:"fas fa-fire"}),"  The documentation site is enriched with much more content.",(0,l.kt)("ul",null,(0,l.kt)("li",null,"Best practices added for Unit Tests and Process Tests."),(0,l.kt)("li",null,"Added versioning for the Reference Guide."),(0,l.kt)("li",null,"Explanatories added, linking to blogs on the Menditect website."),(0,l.kt)("li",null,'"How to" section has been updated, especially to support usage of the MTA Plugin Module.'),(0,l.kt)("li",null,"Legal documents (EULA, SLA, Privacy Policy) have been moved from Google Docs."),(0,l.kt)("li",null,"Releasenotes have been moved from Google Docs."))),(0,l.kt)("ul",null,(0,l.kt)("i",{class:"fas fa-fire"}),"  A form to send a support request can now be opened directly from MTA."),(0,l.kt)("h2",{id:"new-functionality"},"New functionality"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-437"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"Asserts have been explanded with the option to compare using Greater-than or Smaller-than syntax.",(0,l.kt)("br",null),(0,l.kt)("br",null),"For a full list of compare types, see the ",(0,l.kt)("a",{parentName:"td",href:"../refguide/assert-attribute-value#business-rules"},"Business rules in Assert on Attribute Value"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-572"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"When recording a Test Case, MTA will prohibit users from applying a new revision on, or executing a Test Configuration, copying a Test Suite or Test Case and making changes in Teststeps in that Test Case.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-465"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"The Font Awesome icon library has been updated to version 6.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-502"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"The instruction text when copying a Test Suite or Test Case is now more user friendly.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-581"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"New functionality")),(0,l.kt)("td",{parentName:"tr",align:null},"Calculated attributes are now excluded from Retrieve Object Teststeps.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("h2",{id:"bug-fixes"},"Bug fixes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-546"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"When adding a String attribute with a size more than 200 characters to the Datavariation, an error would occur.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"String attributes can now be added to the Datavariation regardless the amount of characters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-492"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"If all items in the Datavariation are deleted, an empty Datavariation would be the result, and the Test Suite would still be executed multiple times but with the same data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"If all items in the Datavariation are deleted, the Datavariation itself is now also deleted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-521"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"If an error needs to be fixed in the Datavariation page, the Solve button would still lead to the Configuration page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"If an error needs to be fixed in the Datavariation page, the Solve button will now lead to the Datavariation page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-545"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"When adding an assert after cancelling in the same page, further user input would be ignored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"Adding an assert after first cancelling now works as expected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MTA-583"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Problem")),(0,l.kt)("td",{parentName:"tr",align:null},"When selecting a Teststep, sometimes the selection of the Test Case was lost.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Solution")),(0,l.kt)("td",{parentName:"tr",align:null},"When selecting a Teststep, the Test Case is also re-selected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Release actions")),(0,l.kt)("td",{parentName:"tr",align:null},"None.")))),(0,l.kt)("br",null))}k.isMDXComponent=!0}}]);