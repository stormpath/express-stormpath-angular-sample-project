'use strict';

var express = require('express');
var path = require('path');
var stormpath = require('express-stormpath');

/**
 * Create the Express application.
 */
var app = express();

/**
 * The 'trust proxy' setting is required if you will be deploying your
 * application to Heroku, or any other environment where you will be behind an
 * HTTPS proxy.
 */
app.set('trust proxy',true);

/*
  We need to setup a static file server that can serve the assets for the
  angular application.  We don't need to authenticate those requests, so we
  setup this server before we initialize Stormpath.
 */
app.disable('strict routing');
app.use('/',express.static(path.join(__dirname,'client')));

/**
 * Now we initialize Stormpath, any middleware that is registered after this
 * point will be protected by Stormpath.
 */

app.use(stormpath.init(app, {
  website: true,
  expand: {
    customData: true,
    groups: true
  },
  web: {
    spaRoot: path.join(__dirname, 'client','index.html')
  }
}));



/**
 * Start the web server.
 */
app.on('stormpath.ready',function () {
  console.log('Stormpath Ready');
  app.listen(process.env.PORT || 3000);
});

