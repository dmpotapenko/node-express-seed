module.exports = (kwargs) => {
  const {app} = kwargs;
  app.use('/', require('./main.routes')(kwargs));
};