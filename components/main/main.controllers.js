module.exports = (kwargs) => {
  return {
    index: index
  };

  /* FUNCTIONS */
  function index(req, res) {
    return res.status(200).render('main');
  }
};