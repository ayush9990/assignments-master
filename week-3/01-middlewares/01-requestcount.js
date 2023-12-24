const request = require('supertest');
const assert = require('assert');
const express = require('express');
const port = 3000;

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

function updateRequestCount(req, res, next) {
  console.log(`${req.method} request to ${req.url}`);
  requestCount = requestCount + 1;
  next(); // Call the next middleware in the stack
}

app.use(updateRequestCount);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
  console.log(requestCount);
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = app;