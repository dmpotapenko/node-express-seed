const env = require('./config');
const express = require('./express');
const routing = require('./routing');

module.exports.env = env;
module.exports.init = init;

function init(kwargs) {
  const {app} = kwargs;
  kwargs.root = env.root;
  express.init(kwargs);
  routing.init(kwargs);
}