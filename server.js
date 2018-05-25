//SPDX-License-Identifier: Apache-2.0

// nodejs server setup 

// call the packages we need
var express       = require('express');        // call express
var app           = express();                 // define our app using express
var bodyParser    = require('body-parser');
var http          = require('http')
var fs            = require('fs');
var path          = require('path');
var util          = require('util');
var os            = require('os');
var cors          = require('cors');
var config        = require('./config');
var morgan        = require('morgan');
// Load all of our middleware
// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// instantiate the app
// var app = express();

// this line requires and runs the code from our routes.js file and passes it app
require('./routes.js')(app);

app.set('view engine', 'pug');
// set up a static file server that points to the "client" directory
//app.use(express.static(path.join(__dirname, './client')));

app.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, config.secret, function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;	
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
	
});

if ( process.env.NODE_ENV === 'production') {
  app.use(express.static('ng-client/dist'));
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'ng-client/dist/index.html'));
  })
}

// Save our port
var port = process.env.PORT || 5000;

// Start the server and listen on port 
app.listen(port,function(){
  console.log("Live on port: " + port);
});

