const controller = (req, res) => {
  const { params: { id }, db: { User } } = req;
  const user = User.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
}

module.exports = controller;
