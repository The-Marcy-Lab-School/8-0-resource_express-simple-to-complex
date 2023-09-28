const controller = (req, res) => {
  res.send(req.db.User.list());
};

module.exports = controller;
