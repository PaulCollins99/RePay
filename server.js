'use strict';

// Express server looking at port 8080

const express = require('express');

const app = express();

app.use('/', express.static('frontend', { extensions: ['htm', 'html'] }));

function printHelloWorld () {
  console.log("Hello, world!");
}

app.listen(8080);

module.exports.printHelloWorld = printHelloWorld;





const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
'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');
const msg = {
  to: 'up820449@gmail.com',
  from: 'test@example.com',
  subject: 'Re:Pay',
  text: 'Thank you for signing up to Re:Pay',
  html: '<strong>Thank you for signing up to Re:Pay</strong>',
};
sgMail.send(msg);
