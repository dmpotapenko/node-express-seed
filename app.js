const express = require('express');
const http = require('http');

// Setup server
const app = express();
const server = http.createServer(app);
const config = require('./config');

config.init({
  app
});

// Start server
function startServer() {
  app.server = server.listen(config.env.port, config.env.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.env.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
module.exports = app;