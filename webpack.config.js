'use strict';
var path = require('path');
var webpack = require('webpack');

/* ------- */
module.exports = {  
  entry: path.resolve(__dirname, './app.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "dist",
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.rt$/, loader: 'babel-loader!react-templates-loader'},
    ]
  }
};