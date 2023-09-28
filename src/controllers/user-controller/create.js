const controller = (req, res) => {
  const { body: { name }, db: { User } } = req;
  const newUser = User.create(name);
  res.status(201).json(newUser);
};

module.exports = controller;
