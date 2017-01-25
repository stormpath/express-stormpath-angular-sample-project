# Stormpath Angularjs (1.x) + Express Fullstack Sample Project

This repository is an example full-stack web application, using AngularJS (1.x) on the
front-end and Express as your back-end server.  It uses [express-stormpath][]
and the [Stormpath Angularjs SDK][] to authenticate users, protect your server API,
and render default login and registration screens in your Angular application.

In this example, you will see the following:

* The default registration and login pages that the [Stormpath Angularjs SDK][] can provide to your application.
* How to use the [Stormpath Client API][] to authenticate the user.
* Using the tokens obtained from the Client API to authenticate requests against your backend.
* Updating the custom data of the Stormpath user object, with a custom profile route handler.


## 1. Getting Started

To run this example project on your local computer, you will need to have
[Node.js][] installed and will need to create a [Stormpath][] tenant account.
Please sign up for a free account at https://api.stormpath.com/register


## 2. Installation

Clone this repository, then enter the folder with your terminal and run this
command:

```bash
npm install
```

If the installation is successful you can continue on to configuration.

## 3. Configuration

To configure the Express server, you need to tell it which Stormpath Application you are using, and a set of API Keys from a Stormpath Administrator account, for securing the communication with Stormpath.  Create a file, in the root of the example, named `stormpath.yml` and place this configuration in the file:

```yaml
client:
  apiKey:
    id: YOUR_API_KEY_ID
    secret: YOUR_API_KEY_SECRET
application:
  href: https://api.stormpath.com/v1/applications/XXXX <-- YOUR APP HREF
```

In the Angular application, you need to specify the Client API domain for your Stormpath Application, this is where the authentication API is for your application.  You can find this by logging into the Stormpath Admin Console, and visiting the Policies section of your Stormpath Application.  You should use the same Stormpath Application that you specified for your Express server.

In `client/app.js`, specify your Client API domain:

```javscript
STORMPATH_CONFIG.ENDPOINT_PREFIX = 'https://YOUR_DOMAIN_NAME.apps.stormpath.io';
```

## 4. Usage

To start the server, run this command:

```bash
npm start
```

If the server is able to start with your configuration, you will see this in
your terminal:

```bash
Initializing Stormpath
Application running at http://localhost:3000
Stormpath Ready
```

The application should now be running in your browser at http://localhost:3000

[express-stormpath]: https://github.com/stormpath/express-stormpath
[Node.js]: https://nodejs.org
[Stormpath]: https://stormpath.com
[Stormpath Admin Console]: https://api.stormpath.com
[Stormpath Angularjs SDK]: https://github.com/stormpath/stormpath-sdk-angularjs
[Stormpath Client API]: https://docs.stormpath.com/client-api/product-guide/latest/