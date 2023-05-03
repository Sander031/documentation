"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3623],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),u=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return s.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||i;return a?s.createElement(m,r(r({ref:t},c),{},{components:a})):s.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var s=a(7462),n=(a(7294),a(3905));const i={sidebar_position:13},r="Test Case",l={unversionedId:"test-case",id:"version-2.0.0/test-case",title:"Test Case",description:"Definition",source:"@site/versioned_docs/version-2.0.0/test-case.md",sourceDirName:".",slug:"/test-case",permalink:"/2.0.0/test-case",draft:!1,tags:[],version:"2.0.0",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Generated test",permalink:"/2.0.0/generated-test"},next:{title:"Test Configuration",permalink:"/2.0.0/test-configuration"}},o={},u=[{value:"Definition",id:"definition",level:2},{value:"Properties",id:"properties",level:2},{value:"Business rules",id:"business-rules",level:2},{value:"Actions on Test Case",id:"actions-on-test-case",level:2},{value:"Run a single Test Case",id:"run-a-single-test-case",level:3},{value:"View Test Cases in a Test Suite",id:"view-test-cases-in-a-test-suite",level:3},{value:"View Test Case details",id:"view-test-case-details",level:3},{value:"Create a Test Case",id:"create-a-test-case",level:3},{value:"Change the order of a Test Case in a Test Suite",id:"change-the-order-of-a-test-case-in-a-test-suite",level:3},{value:"Edit a Test Case",id:"edit-a-test-case",level:3},{value:"Delete a Test Case",id:"delete-a-test-case",level:3},{value:"Related topics",id:"related-topics",level:2},{value:"Feedback?",id:"feedback",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"test-case"},"Test Case"),(0,n.kt)("h2",{id:"definition"},"Definition"),(0,n.kt)("p",null,"A Test Case is a collection of operations to execute on an ",(0,n.kt)("a",{parentName:"p",href:"application-instance"},"Application Instance"),", that are assembled to test some specific aspect of system behaviour. "),(0,n.kt)("p",null,"The Test Case is the third level of the 4-layer framework that is used in MTA. It allows for a ",(0,n.kt)("a",{parentName:"p",href:"test-suite"},"Test Suite")," to be split up into different functional or technical aspects of the tested software, but it is also the level where to choose which app to test and which credentials to test with. "),(0,n.kt)("p",null,"A Test Case can be either 'Manual' or 'Automatic'. Manual Test Cases contain ",(0,n.kt)("a",{parentName:"p",href:"test-instruction"},"Test Instructions"),", do not run any Mendix code and subsequently do not appear whenever the Test Suite is executed. Automatic Test Cases are executable, and contain ",(0,n.kt)("a",{parentName:"p",href:"teststep"},"Teststeps")," that run the underlying Mendix code."),(0,n.kt)("p",null,"An 'Automatic' Test Case is always executed on a Test Application and by an execution user. The name of the execution user that is configured for the Test Case, must exactly match an existing, active and not blocked local user in the ",(0,n.kt)("a",{parentName:"p",href:"application-instance"},"Application Instance")," that is tested. Note that this is not the same user as the Mta Plugin User that is used to communicate between the Application environment and MTA. "),(0,n.kt)("p",null,"When the Test Suite execution hits the Test Case, the Test Case's Execution User is used to login to the Test Case's Test application. When the Test Case is finished executing, the Execution user will be logged out again. The consequence of this, is that all data that was not saved to the database (either by a Persist Object Teststep or a Commit action in a Microflow), will be permanently lost. This is important to realize during test scripting, because if a subsequent Test Case retrieves data from a Teststep in this Test Case, this action will fail if the data was not saved to the database."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the Test Case.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Test Case Type"),(0,n.kt)("td",{parentName:"tr",align:null},"This indicates if a Test Case is executable, can be either 'Manual' or 'Automatic'.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Test application"),(0,n.kt)("td",{parentName:"tr",align:null},"The associated test application to execute the Test Case on.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Execution user"),(0,n.kt)("td",{parentName:"tr",align:null},"The username to execute the Test Case with.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Apply security"),(0,n.kt)("td",{parentName:"tr",align:null},"If this is set to No, any restrictive permissions set by the Mendix security model for the execution user are ignored (the execution username is however still used for associated data).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Execution time-out"),(0,n.kt)("td",{parentName:"tr",align:null},"The maximum number of seconds this Test Case is allowed to run. If the execution duration takes longer, the execution is aborted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Execute with delay"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to wait with executing this Test Case, after the previous Test Case has finished executing. This is particularly useful when some Mendix code is executed asyncronously in a previous Test Case, and you want to prevent the two Test Cases to run simultaneously.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rollback after execution"),(0,n.kt)("td",{parentName:"tr",align:null},"Indicates if all database transactions executed in this Test Case should be rolled back. This enables for unittesting without changing anything in the database. Note that when starting or stopping additional transactions in an executed microflow, this property will not work as expected. Setting this property to Yes will lead to ",(0,n.kt)("a",{parentName:"td",href:"error"},"Errors")," if subsequent Test Cases depend on this Test Case.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Objective"),(0,n.kt)("td",{parentName:"tr",align:null},"The objective of the testcase.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Preconditions"),(0,n.kt)("td",{parentName:"tr",align:null},"A description of the preconditions of a Test Case.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Expected result"),(0,n.kt)("td",{parentName:"tr",align:null},"A description of the expected result of a Test Case.")))),(0,n.kt)("h2",{id:"business-rules"},"Business rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Test Case is always about a single ",(0,n.kt)("a",{parentName:"li",href:"application"},"Application"),".")),(0,n.kt)("h2",{id:"actions-on-test-case"},"Actions on Test Case"),(0,n.kt)("h3",{id:"run-a-single-test-case"},"Run a single Test Case"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to the Test Suite that the Test Case is in."),(0,n.kt)("li",{parentName:"ul"},'Click on the "',(0,n.kt)("i",{class:"fa fa-play"}),'" button on the Test Case to execute it.')),(0,n.kt)("p",null,"Executing a single Test Case is only possible if it does not depend on previous Test Cases. If you still want to execute it, make sure to remove the dependencies."),(0,n.kt)("p",null,"Note that ",(0,n.kt)("a",{parentName:"p",href:"datavariation"},"datavariation")," still applies when executing a single Test Case. This means that even if there are no variations on attributes or asserts from the Test Case in the datavariation, it will still be executed as many times as there are columns in the datavariation."),(0,n.kt)("h3",{id:"view-test-cases-in-a-test-suite"},"View Test Cases in a Test Suite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to the ",(0,n.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite")," that the Test Cases are in."),(0,n.kt)("li",{parentName:"ul"},"MTA will show the Test Cases in the left pane.")),(0,n.kt)("h3",{id:"view-test-case-details"},"View Test Case details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to the Test Suite that the Test Case is in."),(0,n.kt)("li",{parentName:"ul"},"Click on the Test Case to select it."),(0,n.kt)("li",{parentName:"ul"},"Click on Test case details on top of the middle pane.")),(0,n.kt)("h3",{id:"create-a-test-case"},"Create a Test Case"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to the Test Suite you want to create a Test Case in."),(0,n.kt)("li",{parentName:"ul"},'Click "',(0,n.kt)("i",{class:"fal fa-plus-circle"}),' Test case" to create a Test Case.'),(0,n.kt)("li",{parentName:"ul"},"Select either 'Manual' or 'Automatic' for the Test Case Type (Testers can only create 'Manual' Test Cases)."),(0,n.kt)("li",{parentName:"ul"},"Enter a name and other optional information."),(0,n.kt)("li",{parentName:"ul"},"Select an ",(0,n.kt)("a",{parentName:"li",href:"application-instance"},"Application Instance")," to execute the Test Case on."),(0,n.kt)("li",{parentName:"ul"},"Select an Execution User to execute the Test Case with."),(0,n.kt)("li",{parentName:"ul"},"Optionally, change the Execution time-out and Execute with delay."),(0,n.kt)("li",{parentName:"ul"},'Choose "Save".')),(0,n.kt)("h3",{id:"change-the-order-of-a-test-case-in-a-test-suite"},"Change the order of a Test Case in a Test Suite"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fas fa-arrow-up"}),'" or "',(0,n.kt)("i",{class:"fas fa-arrow-down"}),'" on the left of the name of the Test Case to move it up or down.')),(0,n.kt)("p",null,"Note that it is possible that due to moving a Test Case and dependencies of Teststeps in the Test Case with Teststeps in previous Test Cases, an error will occur prohibiting the execution of the Test Configuration."),(0,n.kt)("p",null,"Note that Testers can only move 'Manual' Test Cases, but cannot move 'Automatic' Test Cases."),(0,n.kt)("h3",{id:"edit-a-test-case"},"Edit a Test Case"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fa fa-pencil"}),'" under the "',(0,n.kt)("i",{class:"fas fa-ellipsis"}),'" menu in the Test Case to edit it.')),(0,n.kt)("p",null,"Note that it not is possible to change the Test Case Type or associated Test Application after creation."),(0,n.kt)("h3",{id:"delete-a-test-case"},"Delete a Test Case"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Click on "',(0,n.kt)("i",{class:"fas fa-trash-alt"}),'" under the "',(0,n.kt)("i",{class:"fas fa-ellipsis"}),'" menu on the Test Case you want to delete.')),(0,n.kt)("p",null,"Note that it is possible that due to deleting a Test Case and dependencies of Teststeps in the Test Case with Teststeps in previous Test Cases, an ",(0,n.kt)("a",{parentName:"p",href:"error"},"Error")," will occur prohibiting the execution of the Test Configuration."),(0,n.kt)("p",null,"Note that Testers can only delete 'Manual' Test Cases, but cannot delete 'Automatic' Test Cases."),(0,n.kt)("h2",{id:"related-topics"},"Related topics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"test-setting"},"Test Setting")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"test-instruction"},"Test Instruction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"teststep"},"Teststep")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"test-suite"},"Test Suite"))),(0,n.kt)("h2",{id:"feedback"},"Feedback?"),(0,n.kt)("p",null,"Missing anything? ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,n.kt)("p",null,"Last updated: 19 january 2023"))}d.isMDXComponent=!0}}]);