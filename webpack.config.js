'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ngTemplateLoader = (
    'ngtemplate?relativeTo=' + path.resolve(__dirname, './client/spinner') +
    '!html'
);
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app:    path.join(__dirname, 'client/app.js'),
    vendor: [
      'angular',
      'angular-ui-router',
      path.join(__dirname, 'client/vendor/stormpath-sdk-angularjs.js'),
      path.join(__dirname, 'client/vendor/stormpath-sdk-angularjs.tpls.js')
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
    //TODO: better way to get these ngincludes imported
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/spinner/spinner.html'),
      filename: 'spinner/spinner.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/navbar/navbar.html'),
      filename: 'navbar/navbar.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
        // NOTE: if you want babel for ES6
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
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            loader: 'url-loader?limit=25000&name=[name]-[hash].[ext]',
            include: path.resolve(__dirname, "node_modules/bootstrap"),
            // exclude: /node_modules/

        },
        {
            test: /\.html$/,
            loader: 'raw',
            exclude: /node_modules/
    }]
  }
};
