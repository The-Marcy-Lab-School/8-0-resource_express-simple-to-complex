const express = require('express');
const User = require('./user-model');

const app = express();

const port = 8080;

const handleLogging = (req, res, next) => {
  const time = new Date().toLocaleTimeString();
  console.log(req.method, req.url, time);
  next();
}

const handleAddingModels = (req, res, next) => {
  req.db = { User };
  next();
}

app.use(express.json());
app.use(handleAddingModels);
app.use(handleLogging);

// REST: index
app.get('/users', (req, res) => {
  res.send(req.db.User.list());
});

// REST: show
app.get('/users/:id', (req, res) => {
  const { params: { id }, db: { User } } = req;
  const user = User.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
});

// REST: create
app.post('/users', (req, res) => {
  const { body: { name }, db: { User } } = req;
  const newUser = User.create(name);
  res.status(201).json(newUser);
});

// REST: update
app.patch('/users/:id', (req, res) => {
  const { params: { id }, body: { name }, db: { User } } = req;
  const user = User.update(id, name);
  if (!user) return res.sendStatus(404);

  res.send(user);
});

// REST: destroy
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const didDelete = User.destroy(id);
  if (!didDelete) return res.sendStatus(404);

  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
