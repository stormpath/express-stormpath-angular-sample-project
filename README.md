# Stormpath Angular + Express Fullstack Sample Project

This repository is an example fullstack web application, using Angular.js on the
front-end and Express.js as your back-end server.  It uses [express-stormpath][]
and [stormpath-sdk-angularjs][] to authenticate users, protect your server API,
and render default login and registration screens in your Angular application.

[express-stormpath]: https://github.com/stormpath/express-stormpath
[stormpath-sdk-angularjs]: https://github.com/stormpath/stormpath-sdk-angularjs

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

Please
create a file, in this folder, named `stormpath.yml` and place this configuration
in the file:

```yaml
client:
  apiKey:
    id: YOUR_API_KEY_ID
    secret: YOUR_API_KEY_SECRET
application:
  href: https://api.stormpath.com/v1/applications/XXXX <-- YOUR APP HREF
```

## 4. Usage

To start the server, run this command in the folder:

```bash
node server/server.js
```

If the server is able to start with your configuration, you will see this in
your terminal:

```bash
Stormpath Ready
Application running at http://localhost:3000
```

The application should now be running in your borwser at http://localhost:3000

You can get your API Keys and Application HREF from the
[Stormpath Admin Console][].

[Node.js]: https://nodejs.org
[Stormpath]: https://stormpath.com
[Stormpath Admin Console]: https://api.stormpath.com
[stormpath-sdk-angularjs]: https://github.com/stormpath/stormpath-sdk-angularjs
[express-stormpath]: https://github.com/stormpath/express-stormpath