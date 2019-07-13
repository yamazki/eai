const sessionConfirm = (req, res, next) => {
  if(req.session.userName !== undefined) {
    res.redirect('/home');
  }
  else {
    res.redirect('/login');
  }
}

module.exports.sessionConfirm = sessionConfirm;