//SPDX-License-Identifier: Apache-2.0

// nodejs server setup 

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var http = require('http')
var fs = require('fs');
var path = require('path');
var util = require('util');
var os = require('os');
var cors = require('cors');
var config = require('./config');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');

// Load all of our middleware
// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(express.static(__dirname + '/client'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(function (req, res, next) {
  if (req.url === '/api/login') {
    next();
  } else {
    var authorization = req.headers.authorization;
    var token;
    if (authorization) {
      token = authorization.split(' ')[1];
    }
    token = token || req.body.token || req.param('token') || req.headers['token'] || req.headers['x-access-token'];
    console.log(req.url);
    if (token) {
      jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  }
});

require('./routes.js')(app);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('ng-client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'ng-client/dist/index.html'));
  })
}

// Save our port
var port = process.env.PORT || 5000;

// Start the server and listen on port 
app.listen(port, function () {
  console.log("Live on port: " + port);
});

