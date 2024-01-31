"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6625],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:9},l="CI/CD API (Old)",s={unversionedId:"cicdv1",id:"cicdv1",title:"CI/CD API (Old)",description:"Version 1",source:"@site/docs/cicdv1.md",sourceDirName:".",slug:"/cicdv1",permalink:"/cicdv1",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Assert on Validation feedback",permalink:"/Assert/assert-validation-feedback"},next:{title:"CI/CD API",permalink:"/cicd"}},o={},u=[{value:"Version 1",id:"version-1",level:2},{value:"Enable CI/CD",id:"enable-cicd",level:3},{value:"Check App status",id:"check-app-status",level:3},{value:"Execute a testrun from CI/CD",id:"execute-a-testrun-from-cicd",level:2},{value:"POST testruns",id:"post-testruns",level:3},{value:"GET testrunsresult",id:"get-testrunsresult",level:3},{value:"Powershell script",id:"powershell-script",level:2},{value:"Cleanup testruns",id:"cleanup-testruns",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Feedback?",id:"feedback",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cicd-api-old"},"CI/CD API (Old)"),(0,r.kt)("h2",{id:"version-1"},"Version 1"),(0,r.kt)("p",null,"This document describes the guidelines to use Version 1 of the CI/CD API of MTA in a pipeline."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Version 1 of the CI/CD API is deprecated and will be discontinued in the next release."),(0,r.kt)("p",{parentName:"admonition"},"Please use ",(0,r.kt)("a",{parentName:"p",href:"cicd"},"Version 2"),".")),(0,r.kt)("h3",{id:"enable-cicd"},"Enable CI/CD"),(0,r.kt)("p",null,"Where regular test runs are executed on the Test Configuration level, CI/CD enabled test runs are executed on the Application level. When testing an Application, all Test Configurations that use that Application, and are CI/CD enabled are executed. Keep in mind, that also other Test Applications could be affected, if one of those Test Configurations use more than one."),(0,r.kt)("p",null,"If you want to include a Test configuration in testing, you need to enable it by editing it from the Test design page. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Edit the Test Configuration that you want to execute and set "CI/CD enabled" to TRUE.'),(0,r.kt)("li",{parentName:"ul"},"Now open the ",(0,r.kt)("a",{parentName:"li",href:"test-setting"},"Test Settings")," for the Test Configuration and set a Test Setting as My Preference.")),(0,r.kt)("h3",{id:"check-app-status"},"Check App status"),(0,r.kt)("p",null,"The CI/CD API can be used in a pipeline that performs deployments of a Mendix Application. But the CI/CD API does not check if the deployment is done."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Before executing a CI/CD testrun, check that the deployment is completed and the status of the ",(0,r.kt)("a",{href:"application-instance"},"Application Instance"),' is "Running".')),(0,r.kt)("h2",{id:"execute-a-testrun-from-cicd"},"Execute a testrun from CI/CD"),(0,r.kt)("p",null,"The base URL for the CI/CD API is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{your mta node}/rest/cicdservice/v1/CiCd/\n")),(0,r.kt)("p",null,"The CI/CD API knows two REST requests. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"POST testruns ",(0,r.kt)("br",null)," This request executes a new CI/CD testrun"),(0,r.kt)("li",{parentName:"ol"},"GET testrunsresult ",(0,r.kt)("br",null)," This request returns the result for a previously executed CI/CD testrun")),(0,r.kt)("p",null,"The contents of these requests are described next."),(0,r.kt)("h3",{id:"post-testruns"},"POST testruns"),(0,r.kt)("p",null,"Executes a new CI/CD testrun asynchronously and immediately returns an ExecutionId that can be used to poll for results. "),(0,r.kt)("p",null,"To use this request you need a Project ID for your Mendix App. You can find this by navigating to Applications and clicking on the ",(0,r.kt)("i",{class:"fal fa-circle-info"})," icon for the respective app."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As of MTA version 2.0, MTA will no longer detect and download a matching revision from Teamserver. Therefore it is advisable to always download the revision in the MTA frontend, before the CI/CD run starts.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/rest/cicdservice/v1/CiCd/testruns")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicdservice/v1/CiCd/testruns")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authorization")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username:"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password:"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Input body")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ProjectId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[the Mendix project ID for the Mendix App you want to execute]"))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example:")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n   "ProjectId":"48224593-2187-448d-abe9-9202e1b3a870"\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As of MTA version 2.0, you only have to provide the Project ID. MTA will determine which Application Instance to execute on, by the Test Setting that is set as Preferred by the provided CI/CD user.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Output (if http response = 200/OK)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExecutionId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[an ID that is generated by MTA to uniquely identify the test run]"))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'Example: {"ExecutionId":"ddf0954e-b5df-40cd-879a-eeaa74a19013"}')),(0,r.kt)("h3",{id:"get-testrunsresult"},"GET testrunsresult"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As of MTA version 2.0, this request will also show detailed information and not just whether the run has passed or failed.")),(0,r.kt)("p",null,"After a CiCd execute, use this request to poll MTA to check if the testrun is finished."),(0,r.kt)("p",null,"This request returns the result for a previously executed CI/CD testrun, in a JSON format. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/rest/cicdservice/v1/CiCd/testrunsresult")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicdservice/v1/CiCd/testrunsresult")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authorization")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("th",{parentName:"tr",align:null},"Basic"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username:"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[the CiCd username in MTA]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password:"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[the CiCd password in MTA]"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Input parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExecutionId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[the Execution ID for a previously created CiCd testrun]"))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example: ",(0,r.kt)("a",{parentName:"em",href:"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicdservice/v1/CiCd/testrunsresult?ExecutionId=ddf0954e-b5df-40cd-879a-eeaa74a19013"},"https://mta-menditect-9fo2p.mendixcloud.com/rest/cicdservice/v1/CiCd/testrunsresult?ExecutionId=ddf0954e-b5df-40cd-879a-eeaa74a19013"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Output (if http response = 200/OK)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Result"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{} if the test is still running, otherwise a JSON containing results]"))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Example:")," "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ExecutionId": "53138dae-3f52-462a-8c29-03868fedca9a",\n    "Result": "Pass",\n    "TestRunResults": [{\n            "TestConfigurationName": "Test",\n            "TestRunResult": "Pass",\n            "TestRunUrl": "http://mta-menditect-9fo2p.mendixcloud.com/link/testrun/3",\n            "TestSuiteRunResults": [{\n                    "TestSuiteSequence": 1,\n                    "TestSuiteName": "Test",\n                    "TestSuiteRunResult": "Pass",\n                    "TestsuiteRunUrl": "http://mta-menditect-9fo2p.mendixcloud.com/link/testsuiterun/3",\n                    "TestCaseRunResults": [{\n                            "TestCaseSequence": 1,\n                            "TestCaseName": "Test",\n                            "TestCaseRunResult": "Pass",\n                            "TestCaseRunResultMessage": "",\n                            "TestCaseRunUrl": "http://mta-menditect-9fo2p.mendixcloud.com/link/testcaserun/3"\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"powershell-script"},"Powershell script"),(0,r.kt)("p",null,"It is possible to invoke the CI/CD REST service via a Powershell script in Windows if you have local Administrative privileges.",(0,r.kt)("br",null),"\nThat script looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# --------------- Configuration ------------------\n#\n# ALTER PARAMETERS BELOW FOR YOUR CI/CD CONFIGURATION\n\n$TestAppProjectId = "yourprojectidhere"\n$MtaUrl = "yourmtaurlhere"\n$MtaCiCdUser = "yourusernamehere"\n$MtaCiCdUserPassword = "yourpasswordhere$"\n\n#  --------------- Script ---------------\n#\n# DO NOT ALTER CODE BELOW\n\n$Body = @{\n    ProjectId = $TestAppProjectId\n}\n \n$Parameters = @{\n    Method = "POST"\n    Uri =  $MtaUrl + "/rest/cicdservice/v1/CiCd/testruns"\n    Body = ($Body | ConvertTo-Json)\n    ContentType = "application/json"\n}\n\n$Pass = ConvertTo-SecureString $MtaCiCdUserPassword -AsPlainText -Force\n\n$Cred = New-Object System.Management.Automation.PSCredential ($MtaCiCdUser, $Pass)\n\nInvoke-RestMethod @Parameters -Credential $Cred\n')),(0,r.kt)("p",null,"To use above script:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"open Notepad or another text exitor"),(0,r.kt)("li",{parentName:"ol"},"copy above script with the copy button on the top right, and paste it into the text editor"),(0,r.kt)("li",{parentName:"ol"},"replace the 4 parameters with your own settings"),(0,r.kt)("li",{parentName:"ol"},"save the file as ",(0,r.kt)("inlineCode",{parentName:"li"},"cicd.ps1")),(0,r.kt)("li",{parentName:"ol"},"open Windows Powershell to the folder that you saved the file to"),(0,r.kt)("li",{parentName:"ol"},"execute the file using this command ",(0,r.kt)("inlineCode",{parentName:"li"},"powershell -ExecutionPolicy Bypass -File cicd.ps1"))),(0,r.kt)("h2",{id:"cleanup-testruns"},"Cleanup testruns"),(0,r.kt)("p",null,"Currently, every night a scheduled event cleans CI/CD test runs. MTA only keeps CI/CD test runs associated with the last two executions for a single Application. "),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Problem: I have configured everything but the CI/CD run does not execute or raises an error message."),(0,r.kt)("li",{parentName:"ul"},"Solution: make sure that the Test Application Instance is running and that the provided CI/CD user credentials are correct. Also make sure that the CI/CD user has both roles as desribed (CI/CD user and Test).")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Problem: the CI/CD run executes with an ExecutionID, but also raises an error message."),(0,r.kt)("li",{parentName:"ul"},"Solution: make sure that all the Test Configurations that are CI/CD enabled for the ProjectID that is passed, have a Prefered Test Setting, and also make sure that there is at least one Test Configuration with CI/CD enabled=TRUE.")),(0,r.kt)("h2",{id:"feedback"},"Feedback?"),(0,r.kt)("p",null,"Missing anything? ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@menditect.com"},"Let us know!")),(0,r.kt)("p",null,"Last updated 18 september 2022"))}c.isMDXComponent=!0}}]);