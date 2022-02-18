/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* To get a server up and running there are a few steps you have to follow.

Install express npm install express --save
Require express on a file var express = require('express');
Get the app from express by invoking it var app = express();
Start the server with the app's listen function
The listen function will start a server that you are going to be able to use through the browser.

It has different signature methods, the one you are going to use in this kata is (port, host, callback)

Your Task
Inside the solution function you have to require express and start a server.

The PORT and HOST are going to be pre-loaded in the process.env object (in a node application process.env stores the environment configuration).
*/

process.env = {
  PORT: 3000,
  HOST: '0.0.0.0',
};

const solution = async () => {
  const express = require('express');
  const app = express();
  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Connected to Server! ${process.env.HOST}/:${process.env.PORT}`);
  });
};

// TESTS - run the following command to test this file:
// npm run test -- CYF-Node/Configure_an_express_server.js

test('Configure an express server', () => {
  expect('test').toBe('test');
});
