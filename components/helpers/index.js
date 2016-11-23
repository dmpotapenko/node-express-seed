const glob = require('glob');
const path = require('path');

module.exports = (kwargs) => {
  var files = glob.sync(__dirname + '/!(*index).js');
  var result = {};
  var module = null;
  files.forEach(function (p) {
    module = require(p);
    if (module && typeof module == 'function') {
      module = module(kwargs);
    }
    result = Object.assign(result, module);
  });
  return result;
};