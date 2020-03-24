'use strict';

// Express server looking at port 8080

const express = require('express');

const app = express();

app.use('/', express.static('files', { extensions: ['htm', 'html'] }));

function printHelloWorld () {
  console.log("Hello, world!");
}

app.listen(8080);

module.exports.printHelloWorld = printHelloWorld;