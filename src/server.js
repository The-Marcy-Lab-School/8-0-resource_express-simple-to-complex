const express = require('express');
const apiRoutes = require('./routes');
const addLogging = require('./middleware/add-logging');

const app = express();

app.use(express.json()); // whole app
app.use(addLogging); // whole app
app.use('/api/v1/', apiRoutes); // now all routes are namespaced to /api/v1/

module.exports = app;
/*
Why is our server in another file? So that we can test it without actually STARTING it.
It also helps separate out our concerns. You could also add another server, like websockets, to the project.
*/