var mongoose = require('mongoose')
var config = require('../config');

mongoose.connect(config.database, function(err, db){
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
})
module.exports = mongoose