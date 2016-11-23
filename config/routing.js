const path = require('path');

module.exports.init = init;

function init(kwargs) {
  const {app, root} = kwargs;
  // init components
  require(path.join(root, './components'))(kwargs);
}