const controller = (req, res) => {
  const { id } = req.params;
  const didDelete = User.destroy(id);
  if (!didDelete) return res.sendStatus(404);

  res.sendStatus(204);
};

module.exports = controller;