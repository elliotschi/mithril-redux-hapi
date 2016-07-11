'use strict';

const Hapi = require('hapi');
const path = require('path');

const server = new Hapi.Server();

server.connection({
  port: '8000'
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
  })
});

server.start(err => {
  if (err) throw err;

  console.log(`server running on port: ${server.info.uri}`);
});

