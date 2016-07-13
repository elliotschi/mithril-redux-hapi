'use strict';

const Hapi = require('hapi');
const path = require('path');
const webpack = require('webpack');
const webpackPlugin = require('hapi-webpack-plugin');

const server = new Hapi.Server();

server.connection({
  port: '8000'
});

server.register({
  register: webpackPlugin,
  options: './webpack.config.js'
});

server.register(require('inert'), (err) => {
  if (err) throw err;

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'dist'),
        listing: true
      }
    }
  });
});

// server.router({
//   method: 'GET',
//   path: '*',
//   handler: (req, res) => {
    
//   }
// })

server.start(err => {
  if (err) throw err;

  console.log(`server running on port: ${server.info.uri}`);
});

