const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');

module.exports.init = init;

function init(kwargs) {
  const {app, root} = kwargs;
  const env = app.get('env');
  app.set('views', root + '/views');
  app.set('view engine', 'pug');
  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(cookieParser());
}