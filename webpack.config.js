const path = require('path');
const webpack = require('webpack');
const util = require('util');
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devTool: isProd ? '' : 'sourcemap',
  context: path.join(__dirname, 'src'),

  entry: {
    app: ['./app.js']
  },

  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file?name=[path]index.[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[path][hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isProd ? 'production' : 'development')
      }
    }),
  ]
};
