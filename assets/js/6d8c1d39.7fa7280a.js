"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4409],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5151:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={},l="Record user actions",c={unversionedId:"howtos/record-user-actions",id:"howtos/record-user-actions",title:"Record user actions",description:"For many user actions performed in the Test Application, it is possible to record these actions in MTA, and convert them to either Object Teststeps or Microflow Teststeps.",source:"@site/docs/howtos/record-user-actions.md",sourceDirName:"howtos",slug:"/howtos/record-user-actions",permalink:"/howtos/record-user-actions",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prepare Mendix project",permalink:"/howtos/prepare-mendix-project"},next:{title:"Use SSO",permalink:"/howtos/sso"}},u=[{value:"Prepare project for recording",id:"prepare-project-for-recording",children:[],level:2},{value:"Create a recording",id:"create-a-recording",children:[],level:2},{value:"Finalize a recording",id:"finalize-a-recording",children:[{value:"Selecting objects using attribute constraints",id:"selecting-objects-using-attribute-constraints",children:[],level:3},{value:"Selecting objects using association constraints",id:"selecting-objects-using-association-constraints",children:[],level:3},{value:"Object handling in microflows",id:"object-handling-in-microflows",children:[],level:3},{value:"Object handling in pages",id:"object-handling-in-pages",children:[],level:3},{value:"Date and time handling",id:"date-and-time-handling",children:[],level:3},{value:"Rollback",id:"rollback",children:[],level:3},{value:"Delete",id:"delete",children:[],level:3}],level:2},{value:"Feedback?",id:"feedback",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"record-user-actions"},"Record user actions"),(0,i.kt)("p",null,"For many user actions performed in the ",(0,i.kt)("a",{parentName:"p",href:"../refguide/test-application"},"Test Application"),", it is possible to record these actions in MTA, and convert them to either Object ",(0,i.kt)("a",{parentName:"p",href:"../refguide/teststep"},"Teststeps")," or Microflow Teststeps."),(0,i.kt)("h2",{id:"prepare-project-for-recording"},"Prepare project for recording"),(0,i.kt)("p",null,"Before starting the recording, it is useful to follow these guidelines first."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a draft first, either using ",(0,i.kt)("a",{parentName:"li",href:"../refguide/test-instruction"},"Test Instructions")," in MTA or a simple text tool like notepad."),(0,i.kt)("li",{parentName:"ul"},"Prepare the microflows for recording, following the the steps in ",(0,i.kt)("a",{parentName:"li",href:"prepare-mendix-project"},"this section"),"."),(0,i.kt)("li",{parentName:"ul"},"Select an appropriate ",(0,i.kt)("a",{parentName:"li",href:"../refguide/test-case"},"Test Case"),", preferably one without existing Teststeps."),(0,i.kt)("li",{parentName:"ul"},"Make sure the Execution User for the selected Test Case exists, is active and not blocked."),(0,i.kt)("li",{parentName:"ul"},"Login to the Test Application using the Execution User for the selected Test Case."),(0,i.kt)("li",{parentName:"ul"},"Create separate recordings for each transaction, each in their own Test Case. ")),(0,i.kt)("h2",{id:"create-a-recording"},"Create a recording"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("i",{class:"fas fa-video"}),' ("Create a recording") in the Test Case to open the recording page.'),(0,i.kt)("li",{parentName:"ul"},'Click "Start recording".'),(0,i.kt)("li",{parentName:"ul"},"In the browser, navigate to the Test Application."),(0,i.kt)("li",{parentName:"ul"},"Perform the actions to be recorded there. Make sure to include navigating to the page where the actions are performed in the recording."),(0,i.kt)("li",{parentName:"ul"},"In the browser, navigate back to MTA."),(0,i.kt)("li",{parentName:"ul"},'Click "Stop recording".')),(0,i.kt)("p",null,"The recording page will close and the Teststeps created by the recorder will appear automatically. "),(0,i.kt)("h2",{id:"finalize-a-recording"},"Finalize a recording"),(0,i.kt)("p",null,"If the Teststeps generated by the recorder do not yield any construction errors, always execute the generated Teststeps to validate the outcome.\nDepending on the Mendix model, it may be necessary to manually review the configuration of the teststeps and validate that the outcome is as expected. "),(0,i.kt)("h3",{id:"selecting-objects-using-attribute-constraints"},"Selecting objects using attribute constraints"),(0,i.kt)("p",null,"An existing object that is subsequently used in a Change Object Teststep or passed as a parameter in a Microflow Teststep, can be retrieved using a Retrieve Object Teststep. However it is not always possible to determine which members are used as constraints in that Teststep. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Such Teststeps will be marked in a separate color to indicate they need to be reviewed.")),(0,i.kt)("p",null,"Note that only constraining members that are also visible in the Client are included in the created Teststeps."),(0,i.kt)("h3",{id:"selecting-objects-using-association-constraints"},"Selecting objects using association constraints"),(0,i.kt)("p",null,"It is also possible that the constraint to retrieve an object is not on the object itself, but on an associated object. The associated object needs to be retrieved by a previous teststep, that will not be created by the recorder. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a previous teststep to achieve this.")),(0,i.kt)("h3",{id:"object-handling-in-microflows"},"Object handling in microflows"),(0,i.kt)("p",null,"If an object is created or changed by a microflow the recorder will create a Microflow Teststep calling that creation microflow. If the object is subsequently committed by a microflow, the recorder will create a second Microflow Teststep calling that save microflow. Also, the recorder will create a Change Object Teststep between the two Microflow Teststeps, where the values set in the page by the user are set."),(0,i.kt)("p",null,"Therefore, creating and saving objects using microflows is preferred over using page actions."),(0,i.kt)("h3",{id:"object-handling-in-pages"},"Object handling in pages"),(0,i.kt)("p",null,'If an object is created by the page and not by a microflow (for instance using a "Create Button" in Mendix) the recorder will create a Create Object Teststep without any members. The values set in the page by the user need to be set in MTA as well. If the object is subsequently committed (saved to the database) also by the page (for instance using a "Save changes" button) and not by a microflow, the recorder will not create a Persist Object Test Step to achieve this. '),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Manually set the members in the Create Object Teststep."),(0,i.kt)("li",{parentName:"ul"},"Manually include a Persist Object Teststep to save changes to the database.")),(0,i.kt)("h3",{id:"date-and-time-handling"},"Date and time handling"),(0,i.kt)("p",null,"All datetime values are set as fixed instead of current datetime with an offset."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check datetime attribute values and make sure to change them to current datetime with an offset where necessary. ")),(0,i.kt)("h3",{id:"rollback"},"Rollback"),(0,i.kt)("p",null,'If an object is created and subsequently rolled back by the page and not by a microflow (for instance using a "Cancel changes" button in Mendix) it is not possible for the recorder to determine this rollback has taken place. '),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If testing the rollback action is the goal of the Test Case, it is advisable to include a Rollback action in a microflow and not in the page. "),(0,i.kt)("li",{parentName:"ul"},"Otherwise for obvious reasons, it is advisable to only record actions that are part of the test. ")),(0,i.kt)("h3",{id:"delete"},"Delete"),(0,i.kt)("p",null,"Deletes are not yet part of the recorder. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If an object is deleted either in a microflow or in a page, manually include a Delete Object Teststep, and a subsequent Persist Object Teststep to finalize the delete.")),(0,i.kt)("h2",{id:"feedback"},"Feedback?"),(0,i.kt)("p",null,"Missing anything? ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,i.kt)("p",null,"Last updated 21 april 2022"))}p.isMDXComponent=!0}}]);