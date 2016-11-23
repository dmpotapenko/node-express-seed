const glob = require('glob');

module.exports = function (kwargs) {
  const {app, root} = kwargs;
  const helpers = require('./helpers')(kwargs);
  //load components
  const components = glob.sync(root + '/components/!(helpers)/index.js');
  components.forEach(function (component) {
    require(component)(kwargs);
  });
};