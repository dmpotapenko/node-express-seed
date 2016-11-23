const path = require('path');
// All configurations will extend these options
// ============================================
const environment = {
  env: process.env.NODE_ENV,
  // Root path of server
  root: path.normalize(__dirname + '/..'),
  // Server port
  port: process.env.PORT || 9000,
  // Server IP
  ip: process.env.IP || '0.0.0.0'
};

module.exports = environment;