const express = require('express');
const userController = require('./controllers/user-controller');
const addModels = require('./middleware/add-models');

const router = express.Router();

router.use(addModels);

router.get('/users', userController.showAll);
router.post('/users', userController.create);
router.get('/users/:id', userController.show);
router.patch('/users/:id', userController.update);
router.delete('/users/:id', userController.destroy);

module.exports = router;
