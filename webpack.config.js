'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  // entry: [
  //   'webpack-hot-middleware/client?reload=true',
  //   path.join(__dirname, 'client/app.js')
  // ],
  entry: {
    app:    path.join(__dirname, 'client/app.js'),
    vendor: [path.join(__dirname, 'client/vendor/angular.js'),
      path.join(__dirname, 'client/vendor/angular.js'),
      path.join(__dirname, 'client/vendor/angular-ui-router.js'),
      path.join(__dirname, 'client/vendor/stormpath-sdk-angularjs.js'),
      path.join(__dirname, 'client/vendor/stormpath-sdk-angularjs.tpls.js'),
    ]
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/index.html'),
      hash: true,
      title: 'title'

    }),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
        // {
        //     test: /\.js$/,
        //     loader: 'babel',
        //     exclude: /node_modules/
        // },
        {
            test: /\.css$/,
            loader: 'style!css',
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            loader: 'style!css!sass',
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000',
            exclude: /node_modules/
        },
        {
            test: /\.html$/,
            loader: 'raw',
            exclude: /node_modules/
    }]
  }
};
