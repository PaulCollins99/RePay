'use strict';

// Express server looking at port 8080

const express = require('express');

const app = express();

app.use('/', express.static('frontend', {
  extensions: ['htm', 'html']
}));


function printHelloWorld() {
  console.log("Hello, world!");
}

module.exports.printHelloWorld = printHelloWorld;

app.listen(8080);