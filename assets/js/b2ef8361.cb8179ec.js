"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[721],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9532:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),c=["components"],s={},a="Access environment",u={unversionedId:"howtos/access-environment",id:"howtos/access-environment",title:"Access environment",description:"After MTA can access the projects linked to the Mendix user, the Mendix model can be downloaded for a selected revision. However, to communicate with the environment the App is running on, the MTA Plugin User must be linked as well.",source:"@site/docs/howtos/access-environment.md",sourceDirName:"howtos",slug:"/howtos/access-environment",permalink:"/documentation/howtos/access-environment",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test Suite",permalink:"/documentation/definitions/test-suite"},next:{title:"Access Mendix model",permalink:"/documentation/howtos/access-mendix-model"}},l=[],p={toc:l};function d(e){var t=e.components,s=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"access-environment"},"Access environment"),(0,i.kt)("p",null,"After MTA can access the projects linked to the Mendix user, the Mendix model can be downloaded for a selected revision. However, to communicate with the environment the App is running on, the MTA Plugin User must be linked as well."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add a new Test Application, or open an existing one and click on the pencil icon next to the existing plugin user settings, to edit: ",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"Edit plugin user",src:n(9068).Z})),(0,i.kt)("li",{parentName:"ul"},"In the Mendix application under test, a local user has been created with the \u201cMTA Plugin\u201d role. Enter the username and password in this page: ",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"Edit plugin user",src:n(6658).Z})," "),(0,i.kt)("li",{parentName:"ul"},"Click \u201cCheck plugin\u201d to make sure a connection can be made.\nNote: If this check is performed three times unsuccessfully because the password is incorrect, Mendix can temporarily block the user.")))}d.isMDXComponent=!0},9068:function(e,t,n){t.Z=n.p+"assets/images/edit-plugin-user-1-31c08edff7d95695f4b68491e4569b97.png"},6658:function(e,t,n){t.Z=n.p+"assets/images/edit-plugin-user-2-54192d15f0f7a4c93989b638a13dd85b.png"}}]);