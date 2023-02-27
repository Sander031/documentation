"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8285],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var r=a.createContext({}),u=function(t){var e=a.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(r.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,r=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),h=i,f=d["".concat(r,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(f,o(o({ref:e},p),{},{components:n})):a.createElement(f,o({ref:e},p))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5538:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const l={},o="Run your first test in MTA",s={unversionedId:"run-first-test",id:"run-first-test",title:"Run your first test in MTA",description:"These step-by-step instructions will help new MTA users add and execute their first test on a single Mendix App.",source:"@site/additional/01-howtos/run-first-test.md",sourceDirName:".",slug:"/run-first-test",permalink:"/additional/howtos/run-first-test",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Record and complete teststeps",permalink:"/additional/howtos/record-user-actions"},next:{title:"Run MTA on premise",permalink:"/additional/howtos/run-mta-on-premise"}},r={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Goals",id:"goals",level:2},{value:"1. Add an Application",id:"1-add-an-application",level:2},{value:"2. Add a Test Configuration",id:"2-add-a-test-configuration",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"3. Execution user",id:"3-execution-user",level:2},{value:"4. Design your test",id:"4-design-your-test",level:2},{value:"Add a Test Case",id:"add-a-test-case",level:3},{value:"Add a Teststep",id:"add-a-teststep",level:3},{value:"5. Execute and evaluate your test",id:"5-execute-and-evaluate-your-test",level:2}],p={toc:u};function c(t){let{components:e,...l}=t;return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-your-first-test-in-mta"},"Run your first test in MTA"),(0,i.kt)("p",null,"These step-by-step instructions will help new MTA users add and execute their first test on a single Mendix App."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To go through these steps, you need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to have access to a Licensed Mendix App which is running in a cloud environment or on your local machine,"),(0,i.kt)("li",{parentName:"ul"},"to know the username of an Account on this environment,"),(0,i.kt)("li",{parentName:"ul"},"to have finished the previous 2 walkthroughs: ",(0,i.kt)("a",{parentName:"li",href:"prepare-for-using-mta"},"prepare for using MTA")," and ",(0,i.kt)("a",{parentName:"li",href:"access-mendix-model"},"access a Mendix model"),".")),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("p",null,"If you walk through these instructions, you will have "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"registered one of your Mendix Apps in MTA, so you can test it,"),(0,i.kt)("li",{parentName:"ul"},"selected an instance (environment) of this Mendix App where it is running,  "),(0,i.kt)("li",{parentName:"ul"},"registered an existing Account on this instance to be tested with,"),(0,i.kt)("li",{parentName:"ul"},"created a simple microflow (unit) test with an assert,"),(0,i.kt)("li",{parentName:"ul"},"executed and evaluated this test.")),(0,i.kt)("p",null,"The test will execute a single microflow and check that the return value is not empty."),(0,i.kt)("h2",{id:"1-add-an-application"},"1. Add an Application"),(0,i.kt)("p",null,"Your very first stop is the 'Applications' tab. "),(0,i.kt)("p",null,"You will start by adding an Application to MTA and adding the username of an account in that Application, so MTA can login with that user to execute your test.\nClick on the '+ Add' button to add an Application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add application",src:n(4838).Z,width:"1114",height:"145"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MTA should show the Mendix projects associated with the given Mendix user for your MTA account."),(0,i.kt)("li",{parentName:"ul"},"Add the application that you want to test from the list."),(0,i.kt)("li",{parentName:"ul"},"MTA will open the details of the Application so you can add a Test configuration. ")),(0,i.kt)("h2",{id:"2-add-a-test-configuration"},"2. Add a Test Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to "Test configurations" in the left menu.'),(0,i.kt)("li",{parentName:"ul"},"Click on the '+ Add' button to start the wizard for adding a Test Configuration.")),(0,i.kt)("p",null,"The Wizard consists of 4 steps. "),(0,i.kt)("h3",{id:"step-1"},"Step 1"),(0,i.kt)("p",null,"Enter the name and optional description of the Test Configuration. Click 'Save and Next'. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add test configuration",src:n(459).Z,width:"938",height:"325"})),(0,i.kt)("h3",{id:"step-2"},"Step 2"),(0,i.kt)("p",null,"Selecting the Application under test. Select the Application that you just added to MTA and click 'Next'."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add test configuration",src:n(7237).Z,width:"1043",height:"316"})),(0,i.kt)("h3",{id:"step-3"},"Step 3"),(0,i.kt)("p",null,"Click the 'Select revision' button. MTA will show a popup. Select the branch and revision that you want to test. Click 'Save and Next'. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add test configuration",src:n(9218).Z,width:"1049",height:"250"})),(0,i.kt)("p",null,"MTA will show a message that it will start downloading this revision."),(0,i.kt)("h3",{id:"step-4"},"Step 4"),(0,i.kt)("p",null,"The last step is selecting an application instance. Click 'Application instance'."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add test configuration",src:n(5069).Z,width:"1055",height:"331"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you're running your Application under test on the Mendix Cloud, click 'Existing application instance'. You can select any of the application instances MTA has detected when you added the Application."),(0,i.kt)("li",{parentName:"ul"},"If you're running on another cloud provider, on premise, or on a local computer, click 'New application instance'. ")),(0,i.kt)("p",null,"After you have selected an Application instance, you will see the name and UID shown like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add test configuration",src:n(2137).Z,width:"1051",height:"259"})),(0,i.kt)("p",null,"Save the setup of your Test Configuration."),(0,i.kt)("h2",{id:"3-execution-user"},"3. Execution user"),(0,i.kt)("p",null,"Next is configuring execution users. This is the Account that you would normally use to login to the Application and test the frontend. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to "Execution users" in the left menu.')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add application",src:n(8629).Z,width:"772",height:"356"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the '+ Add' button."),(0,i.kt)("li",{parentName:"ul"},"Enter the username of the Account you login with in the Test Application, when you normally execute your tests.",(0,i.kt)("br",null),"Don't know what username to enter?  'MxAdmin' will work in most situations."),(0,i.kt)("li",{parentName:"ul"},"Save. ")),(0,i.kt)("h2",{id:"4-design-your-test"},"4. Design your test"),(0,i.kt)("p",null,"Now you can start designing your first test.\nThe structure of a test script in MTA looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add test configuration",src:n(2456).Z,width:"663",height:"321"})),(0,i.kt)("p",null,"Use the '...' button on your Test Configuration to show the quick menu and choose 'Test design'."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add test configuration",src:n(5008).Z,width:"745",height:"215"})),(0,i.kt)("p",null,"MTA will show the Test Design page and with your Test Configuration preselected."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the '+ Test suite' button to add a Test Suite to your Test Configuration."),(0,i.kt)("li",{parentName:"ul"},"Give it a name and optional description."),(0,i.kt)("li",{parentName:"ul"},"Save."),(0,i.kt)("li",{parentName:"ul"},"MTA will open the Test Suite.")),(0,i.kt)("h3",{id:"add-a-test-case"},"Add a Test Case"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the '+ Test case' button to add a Test Case to your Test Suite."),(0,i.kt)("li",{parentName:"ul"},"Give it a name."),(0,i.kt)("li",{parentName:"ul"},"Leave the type at 'Automatic'."),(0,i.kt)("li",{parentName:"ul"},"Test application and Execution user will be preselelected if you have completed above steps."),(0,i.kt)("li",{parentName:"ul"},"Save."),(0,i.kt)("li",{parentName:"ul"},"MTA will select the Test Case that you just added.")),(0,i.kt)("h3",{id:"add-a-teststep"},"Add a Teststep"),(0,i.kt)("p",null,"Next you will choose a microflow to test."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click '+ Microflow test'."),(0,i.kt)("li",{parentName:"ul"},"Choose a microflow with a String or Integer/Long return value.  "),(0,i.kt)("li",{parentName:"ul"},"MTA will create a teststep for executing the microflow, and teststeps to fill the parameters of the microflow. ",(0,i.kt)("br",null),"Note: you have to create nonpersistable objects yourself. "),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("i",{class:"fal fa-ballot-check"})," and then '+ Assert' to add an Assert."),(0,i.kt)("li",{parentName:"ul"},"Change 'Assert' to \"Not equals\". This will check that the output is not empty."),(0,i.kt)("li",{parentName:"ul"},"Save.",(0,i.kt)("br",null))),(0,i.kt)("h2",{id:"5-execute-and-evaluate-your-test"},"5. Execute and evaluate your test"),(0,i.kt)("p",null,"You have two options to execute your test:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click '",(0,i.kt)("i",{class:"fas fa-play"}),' Execute\' to Execute the Test Configuration (shown at "1" in the image).'),(0,i.kt)("li",{parentName:"ol"},"You can also only run your Test Case with the ",(0,i.kt)("i",{class:"fas fa-play"}),' button (shown at "2" in the image).')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add test configuration",src:n(9507).Z,width:"1648",height:"422"})),(0,i.kt)("p",null,"After executing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on 'Details' to view your test results."),(0,i.kt)("li",{parentName:"ul"},"Click on 'Results' to view the test suite run results."),(0,i.kt)("li",{parentName:"ul"},"MTA will open the Test suite run results. This page looks familiar, but is not the same as the page where you configure your Test Suite. You can go back with the '",(0,i.kt)("i",{class:"fas fa-cog"})," Configure test suite' button.")),(0,i.kt)("p",null,"Did your test pass? Congratulations! ",(0,i.kt)("br",null),"\nIf not, you can try setting the 'Apply security' to 'Off' on your Test Case. ",(0,i.kt)("br",null),"\nAdditionally, you may want to read ",(0,i.kt)("a",{parentName:"p",href:"deal-with-failed-testrun"},"this page"),"."))}c.isMDXComponent=!0},4838:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/00-0c265f4891288ed4d6859818ca49e826.png"},8629:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/01-f6dd2915e9b58333f22e04db1d6ae447.png"},459:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/03-03493f5f7e6dedf5f71d57255cfa754e.png"},7237:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/04-ffae28ad1ec90ec014983c10925365fb.png"},9218:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/05-b9e4ef4566a36e4f0d4043915a0cba9b.png"},5069:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/06-540cf0749ae939d2cea2f9d9ea6775c0.png"},2137:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/07-9e2e375cea720c36f2c42148f8cb7dea.png"},5008:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/08-4f54ddf536b28f7ea3a4f74625e294ce.png"},9507:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/09-707ecfc47280132695693c72676d736b.png"},2456:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/test_configuration_scheme-01f85f1310aa506cb28172482f4f994d.png"}}]);