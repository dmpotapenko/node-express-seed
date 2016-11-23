const express = require('express');

module.exports = (kwargs) => {
  const router = express.Router();
  const controllers = require('./main.controllers')(kwargs);
  router.get('/', controllers.index);
  return router;
};