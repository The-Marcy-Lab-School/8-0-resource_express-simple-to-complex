const User = require('../models/user');

const handleAddingModels = (req, res, next) => {
  req.db = { User };
  next();
}

module.exports = handleAddingModels;