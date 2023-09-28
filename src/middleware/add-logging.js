// This file just logs things out to your Node console.
const addLogging = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next();
};

module.exports = addLogging;
