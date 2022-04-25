# Process testing

A process test consists of several steps, where multiple functions of the software are tested. The user and the system interact, and in some cases multiple users or integrating external systems are involved. Part of the process test could be verifying some deliverable as part of the result.

There may also be one or more processes in any Mendix App that are business-critical and therefore need to be regression-tested. 

A process test generally creates data that can be visually inspected in the Mendix app being tested. However part of the test should be cleaning up the data, to avoid uncontrolled growth of the data generated by the test, and also to avoid unique constraint runtime errors. 

A process test in MTA typically looks like this:
- multiple Test Suites in one Test Configuration;
- the first Test Suite cleans up both masterdata and process data generated from the previous run of the Test Configuration;
- the second Test Suite creates masterdata;
- subsequent Test Suites deal with the actual process test;
- in these Test Suites, one or more Test Cases where each test case represents a user or component transaction, using data from the database from the previous Test Case;
- in these Test Cases, alternating Object and Microflow Teststeps, each using data from the previous one;
- continuous usage of asserts for checking the results;
- Data Variation to drive different scenario's of the process.

Below steps are optional, not mandatory, but will make it much easier to process test.

- Use the **MTA recorder** as a starting point. Read more about this in the How To section.
- Focus on building the Test Suites where the actual test is performed **first**.
- **Check results** in the Mendix app often, to check the progress.
- Then, **create masterdata** from scratch as much as possible, rather than reusing existing. This is to make sure the test always runs and there are no dependencies from the environment where the test is executed on.
- After that, always put a Test Suite to clean up, **before** the Test Suites for actual testing are executed. This makes it possible to visually inspect the result in the Mendix app being tested.
- When cleaning up, preferably use **existing (microflow) logic** to delete, rather than Delete Object Teststeps. This is to make sure associated objects or data generated from Domain Model Event handlers is also deleted.
- **Include asserts** to check the results of attribute values. Also create Object Count asserts after each Retrieve Object Teststep and each Microflow Teststep that returns an object or List.
- **Create datavariation**, to test with different values of the attributes. Make sure to also include the asserts in the datavariation. And finally, when creating multiple columns (variations) in the datavariation, only change one attribute value per variation. 

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 21 april 2022