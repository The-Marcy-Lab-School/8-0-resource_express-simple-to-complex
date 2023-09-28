/*
We know that in REST there's a route called the "index route", but that's not what this file is! `index.js` is a magic word in node, it means it will load it automatically. These two lines are exactly the same:

const controller = require('./controllers/user-controller');
const controller = require('./controllers/user-controller/index');

So we're going to use this `index.js` file as a "barrel" file, which is a file that exports a bunch of other files. We're going to export all of the files in the `controllers/user-controller` folder. This lets us have a really clean routes.js file
*/

const show = require('./show');
const showAll = require('./show-all'); // REST's index route
const create = require('./create');
const update = require('./update');
const destroy = require('./destroy');

module.exports = {
  show,
  showAll,
  create,
  update,
  destroy,
};
