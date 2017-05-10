# Stormpath is Joining Okta

We are incredibly excited to announce that [Stormpath is joining forces with Okta](https://stormpath.com/blog/stormpaths-new-path?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement). Please visit [the Migration FAQs](https://stormpath.com/oktaplusstormpath?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement) for a detailed look at what this means for Stormpath users.

We're available to answer all questions at [support@stormpath.com](mailto:support@stormpath.com).

## What does this mean for developers who are using this library?

This library was an example project that showed you how integrate the [express-stormpath][] and [Stormpath Angular SDK][] libraries into your Express application.

Now this example has been changed to depend on the in-progress 4.0 release of [express-stormpath][].  You can use this sample application to demonstrate the work in progress on the 4.0 release

## How to use this to test Express-Stormpath 4.0 Release Candidates

1. Current stormpath developers should obtain an Okta Developer organization by visiting https://www.okta.com/developer/signup/stormpath

2. Clone this repo to your computer, and cd into the project directory:

  ```bash
  git clone https://github.com/stormpath/express-stormpath-angular-sample-project.git
  cd express-stormpath-angular-sample-project
  ```

3. Install the dependencies from package.json:

  ```bash
  npm install
  ```

4. Export your Okta Org URL to the environment, this was emailed to you when you signed up, and it's the URL you use to get into the Okta Admin Console:

  ```bash
  export OKTA_ORG=https://dev-YOUR_ORG_ID.oktapreview.com/
  ```

5. Using the Okta Admin Console, obtain an API Token for the Okta API by visiting Admin -> Security -> API -> Tokens, then exporting it to the environment:

  ```bash
  export OKTA_APITOKEN=YOUR_TOKEN
  ```

6. Run the test data script to populate your tenant with some test data:

  ```bash
  node ./node_modules/express-stormpath/util/okta-test-data.js --apiToken=$OKTA_APITOKEN --org=$OKTA_ORG
  ```

  The script will output some information, including an Okta Application ID, which you should export to the environment:

  ```bash
  export OKTA_APPLICATION_ID=YOUR_ID
  ```
7. Start the node server:

  ```bash
  node server.js
  ```

8. Visit [http://localhost:3000/](http://localhost:3000/) in your browser.  You should be able to login with the credentials that were provided by the test data script

If you are able to login, things are working!  You can now use this app to test any use cases that are important to you.  As you do so, you'll want to review the [Express-Stormpath 4.x Changelog][] to understand what is changing.

The next step is to export your tenant data from Stormpath (available in the Stormpath Admin Console).  Once you have an export you can use the [stormpath-migration][] tool to import your data into Okta.

## Contact Stormpath Support

Questions?  Please get in touch through [support@stormpath.com](mailto:support@stormpath.com), your feedback is very important during this migration!

[express-stormpath]: https://github.com/stormpath/express-stormpath
[Express-Stormpath 4.x Changelog]: https://github.com/stormpath/express-stormpath/blob/4.0.0/docs/changelog.rst
[Stormpath Angular SDK]: https://github.com/stormpath/stormpath-sdk-angularjs
[stormpath-migration]: https://github.com/okta/stormpath-migration
