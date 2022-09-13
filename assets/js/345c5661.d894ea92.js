"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6129],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8631:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={},u="Java action not implemented",l={unversionedId:"knownissues/java-action-not-implemented",id:"knownissues/java-action-not-implemented",title:"Java action not implemented",description:"Issue summary",source:"@site/docs/knownissues/java-action-not-implemented.md",sourceDirName:"knownissues",slug:"/knownissues/java-action-not-implemented",permalink:"/knownissues/java-action-not-implemented",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Nanoflows",permalink:"/howtos/test-nanoflows"},next:{title:"Java Compile Error",permalink:"/knownissues/java-compile-error"}},c={},p=[{value:"Issue summary",id:"issue-summary",level:2},{value:"Possible causes and resolutions",id:"possible-causes-and-resolutions",level:2},{value:"Javasource mtapluginmodule directory missing",id:"javasource-mtapluginmodule-directory-missing",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"java-action-not-implemented"},"Java action not implemented"),(0,i.kt)("h2",{id:"issue-summary"},"Issue summary"),(0,i.kt)("p",null,"When attemting to execute a Test Configuration, a HTTP 500 error occurs. The logging of the Application Environment reveals that a Java action was not implemented."),(0,i.kt)("h2",{id:"possible-causes-and-resolutions"},"Possible causes and resolutions"),(0,i.kt)("h3",{id:"javasource-mtapluginmodule-directory-missing"},"Javasource mtapluginmodule directory missing"),(0,i.kt)("p",null,"The javasource\\mtapluginmodule subdirectory in the project directory of the Test Application is deleted or empty.\nThis could be result of importing the MTA Plugin Module as a (private) marketplace module.\nThe MTA Plugin Module should be imported as a normal project module. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Resolution "),"\nFollow ",(0,i.kt)("a",{parentName:"p",href:"../howtos/import-plugin"},"these steps")," to correctly import the plugin module."))}d.isMDXComponent=!0}}]);