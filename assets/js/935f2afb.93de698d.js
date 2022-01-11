"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(i){i.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Documentation","href":"/documentation/","docId":"intro"},{"type":"category","label":"MTA definitions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Application Branch","href":"/documentation/definitions/application-branch","docId":"definitions/application-branch"},{"type":"link","label":"Application Environment","href":"/documentation/definitions/application-environment","docId":"definitions/application-environment"},{"type":"link","label":"Application Revision","href":"/documentation/definitions/application-revision","docId":"definitions/application-revision"},{"type":"link","label":"Application","href":"/documentation/definitions/application","docId":"definitions/application"},{"type":"link","label":"Assert Attribute Value","href":"/documentation/definitions/assert-attribute-value","docId":"definitions/assert-attribute-value"},{"type":"link","label":"Assert Object Count","href":"/documentation/definitions/assert-object-count","docId":"definitions/assert-object-count"},{"type":"link","label":"Attribute Value","href":"/documentation/definitions/attribute-value","docId":"definitions/attribute-value"},{"type":"link","label":"Construction Error","href":"/documentation/definitions/construction-error","docId":"definitions/construction-error"},{"type":"link","label":"Data Variation Item","href":"/documentation/definitions/datavariation-item","docId":"definitions/datavariation-item"},{"type":"link","label":"Data Variation","href":"/documentation/definitions/datavariation","docId":"definitions/datavariation"},{"type":"link","label":"Microflow Parameter Value","href":"/documentation/definitions/microflow-parameter-value","docId":"definitions/microflow-parameter-value"},{"type":"link","label":"Test Application","href":"/documentation/definitions/test-application","docId":"definitions/test-application"},{"type":"link","label":"Test Case","href":"/documentation/definitions/test-case","docId":"definitions/test-case"},{"type":"link","label":"Test Configuration","href":"/documentation/definitions/test-configuration","docId":"definitions/test-configuration"},{"type":"link","label":"Test Instruction","href":"/documentation/definitions/test-instruction","docId":"definitions/test-instruction"},{"type":"link","label":"Test Run","href":"/documentation/definitions/test-run","docId":"definitions/test-run"},{"type":"link","label":"Test Step","href":"/documentation/definitions/test-step","docId":"definitions/test-step"},{"type":"link","label":"Test Suite","href":"/documentation/definitions/test-suite","docId":"definitions/test-suite"}]},{"type":"category","label":"MTA howto","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Access environment","href":"/documentation/howtos/access-environment","docId":"howtos/access-environment"},{"type":"link","label":"Access Mendix model","href":"/documentation/howtos/access-mendix-model","docId":"howtos/access-mendix-model"},{"type":"link","label":"Configure Ci/Cd pipeline","href":"/documentation/howtos/cicd","docId":"howtos/cicd"},{"type":"link","label":"Import MTA Plugin","href":"/documentation/howtos/import-plugin","docId":"howtos/import-plugin"},{"type":"link","label":"Prepare Mendix project","href":"/documentation/howtos/prepare-mendix-project","docId":"howtos/prepare-mendix-project"},{"type":"link","label":"Use SSO","href":"/documentation/howtos/sso","docId":"howtos/sso"},{"type":"link","label":"Test an API","href":"/documentation/howtos/test-api","docId":"howtos/test-api"}]},{"type":"category","label":"Known issues","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Java Compile Error","href":"/documentation/knownissues/java-compile-error","docId":"knownissues/java-compile-error"}]}]},"docs":{"definitions/application":{"id":"definitions/application","title":"Application","description":"Definition","sidebar":"tutorialSidebar"},"definitions/application-branch":{"id":"definitions/application-branch","title":"Application Branch","description":"Definition","sidebar":"tutorialSidebar"},"definitions/application-environment":{"id":"definitions/application-environment","title":"Application Environment","description":"Definition","sidebar":"tutorialSidebar"},"definitions/application-revision":{"id":"definitions/application-revision","title":"Application Revision","description":"Definition","sidebar":"tutorialSidebar"},"definitions/assert-attribute-value":{"id":"definitions/assert-attribute-value","title":"Assert Attribute Value","description":"Definition","sidebar":"tutorialSidebar"},"definitions/assert-object-count":{"id":"definitions/assert-object-count","title":"Assert Object Count","description":"Definition","sidebar":"tutorialSidebar"},"definitions/attribute-value":{"id":"definitions/attribute-value","title":"Attribute Value","description":"Definition","sidebar":"tutorialSidebar"},"definitions/construction-error":{"id":"definitions/construction-error","title":"Construction Error","description":"Definition","sidebar":"tutorialSidebar"},"definitions/datavariation":{"id":"definitions/datavariation","title":"Data Variation","description":"Definition","sidebar":"tutorialSidebar"},"definitions/datavariation-item":{"id":"definitions/datavariation-item","title":"Data Variation Item","description":"Definition","sidebar":"tutorialSidebar"},"definitions/microflow-parameter-value":{"id":"definitions/microflow-parameter-value","title":"Microflow Parameter Value","description":"Definition","sidebar":"tutorialSidebar"},"definitions/test-application":{"id":"definitions/test-application","title":"Test Application","description":"Definition","sidebar":"tutorialSidebar"},"definitions/test-case":{"id":"definitions/test-case","title":"Test Case","description":"Definition","sidebar":"tutorialSidebar"},"definitions/test-configuration":{"id":"definitions/test-configuration","title":"Test Configuration","description":"Definition","sidebar":"tutorialSidebar"},"definitions/test-instruction":{"id":"definitions/test-instruction","title":"Test Instruction","description":"Definition","sidebar":"tutorialSidebar"},"definitions/test-run":{"id":"definitions/test-run","title":"Test Run","description":"Definition","sidebar":"tutorialSidebar"},"definitions/test-step":{"id":"definitions/test-step","title":"Test Step","description":"Definition","sidebar":"tutorialSidebar"},"definitions/test-suite":{"id":"definitions/test-suite","title":"Test Suite","description":"Definition","sidebar":"tutorialSidebar"},"howtos/access-environment":{"id":"howtos/access-environment","title":"Access environment","description":"After MTA can access the projects linked to the Mendix user, the Mendix model can be downloaded for a selected revision. However, to communicate with the environment the App is running on, the MTA Plugin User must be linked as well.","sidebar":"tutorialSidebar"},"howtos/access-mendix-model":{"id":"howtos/access-mendix-model","title":"Access Mendix model","description":"To access Mendix projects, the user who logs in to MTA must be linked to a Mendix user.","sidebar":"tutorialSidebar"},"howtos/cicd":{"id":"howtos/cicd","title":"Configure Ci/Cd pipeline","description":"Definition","sidebar":"tutorialSidebar"},"howtos/import-plugin":{"id":"howtos/import-plugin","title":"Import MTA Plugin","description":"Download the MTA plugin module from Github with the highest Mendix version possible for your project. Check the version that is displayed on the Plugin. It represents the lowest supported Mendix version, all higher Mendix versions are supported.","sidebar":"tutorialSidebar"},"howtos/prepare-mendix-project":{"id":"howtos/prepare-mendix-project","title":"Prepare Mendix project","description":"To prepare the Mendix project for MTA, it is advisable to check for microflows that open a page. If you want to test a microflow that opens a page, you must include an output parameter in that microflow, returning the exact same object that is passed to the page.","sidebar":"tutorialSidebar"},"howtos/sso":{"id":"howtos/sso","title":"Use SSO","description":"Menditect uses a username with each test case to indicate who is running it. This is basically the username of a local user account, but could also be the ID of an SSO user. This ID is a number that can be found in your mendix app when you log in as MxAdmin. Unfortunately, you won\'t be able to see which user is associated with this ID (but you can see which roles), you can only see this from the IAM application.","sidebar":"tutorialSidebar"},"howtos/test-api":{"id":"howtos/test-api","title":"Test an API","description":"Testing an API means creating an integration test where two apps communicate. One hypothetical app (A) executes a REST call. The other app (B) hosting a REST service, will answer. In MTA it is not possible to directly execute a REST call or host a REST service, but it is possible to use the microflows where the REST call or service depends on.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Documentation","description":"Overview of documentation","sidebar":"tutorialSidebar"},"knownissues/java-compile-error":{"id":"knownissues/java-compile-error","title":"Java Compile Error","description":"Issue summary","sidebar":"tutorialSidebar"}}}')}}]);