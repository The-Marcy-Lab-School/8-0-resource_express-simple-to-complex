// REST: update
const controller = (req, res) => {
  const { params: { id }, body: { name }, db: { User } } = req;
  const user = User.update(id, name);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

module.exports = controller;