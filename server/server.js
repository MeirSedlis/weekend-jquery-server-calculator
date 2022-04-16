// push results objects to this array for render to the DOM
const history = [];

// load libraries
const express = require('express');
const bodyParser = require('body-parser');

// generate server and routes

const app = express();
app.use(express.static('./server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes go here

// declare port
const PORT = 5000;

// start server
app.listen(PORT, function() {
  console.log(`server is running at http://localhost:${PORT}`);
})