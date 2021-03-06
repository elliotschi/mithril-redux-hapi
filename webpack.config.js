'use strict';
// without imports for the middleware
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;

const isProduction = process.env.NODE_ENV === 'production';
process.env.BABEL_ENV = process.env.NODE_ENV;

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const base = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.(js)?$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: PATHS.app,
    hot: true,
    inline: true,
    progress: true
  },
  plugins: [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin(), new webpack.optimize.OccurenceOrderPlugin()]
};

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [HTMLWebpackPluginConfig, productionPlugin]
};

module.exports = Object.assign({}, base, isProduction === true ? productionConfig : developmentConfig);