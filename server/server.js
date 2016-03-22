'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const stormpath = require('express-stormpath');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
// const port = isDeveloping ? 3000 : process.env.PORT;

/**
 * Create the Express application.
 */
const app = express();




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
if (!isDeveloping) {
  app.use('/',express.static(path.join(__dirname, '..', 'dist'),{ redirect: false }));
}

/**
 * Now we initialize Stormpath, any middleware that is registered after this
 * point will be protected by Stormpath.
 */

console.log('Initializing Stormpath');

app.use(stormpath.init(app, {
  web: {
    spa: {
      enabled: true,
      view: path.join(__dirname, '..', 'client','index.html')
    },
    me: {
      expand: {
        customData: true,
        groups: true
      }
    }
  }
}));

/**
 * Now that our static file server and Stormpath are configured, we let Express
 * know that any other route that hasn't been defined should load the Angular
 * application.  It then becomes the responsiliby of the Angular application
 * to define all view routes, and rediret to the home page if the URL is not
 * defined.
 */



 if (isDeveloping){
     console.log('isdev');
     const compiler = webpack(config);
     const middleware = webpackMiddleware(compiler, {
       publicPath: config.output.publicPath,
       contentBase: 'client',
       stats: {
         colors: true,
         hash: false,
         timings: true,
         chunks: false,
         chunkModules: false,
         modules: false
       }
     });

     app.use(middleware);
     app.use(webpackHotMiddleware(compiler));
     app.get('*', function response(req, res) {
        // res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../client/index.html')));
        // res.sendFile(path.join(__dirname, 'dist/index.html'));
       res.end();
     });
 } 

app.post('/profile', bodyParser.json(), stormpath.loginRequired, require('./routes/profile'));

/**
 * Start the web server.
 */
app.on('stormpath.ready',function () {
  console.log('Stormpath Ready');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("NODE_ENV =", process.env.NODE_ENV);
  console.log('Application running at http://localhost:'+port);
});


// _____________________________________
// FOR REFERENCE TEMPORARILY
// if (!isDeveloping) {
//   console.log('isdev');
//   const compiler = webpack(config);
//   const middleware = webpackMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//     contentBase: 'client',
//     stats: {
//       colors: true,
//       hash: false,
//       timings: true,
//       chunks: false,
//       chunkModules: false,
//       modules: false
//     }
//   });
//
//   app.use(middleware);
//   app.use(webpackHotMiddleware(compiler));
//   app.get('*', function response(req, res) {
//     res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
//     res.end();
//   });
// } else {
//
//   // app.use(express.static(__dirname + '/dist'));
//   // app.get('*', function response(req, res) {
//   //   res.sendFile(path.join(__dirname, 'dist/index.html'));
//   // });
//
// }
