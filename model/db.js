var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ziontech', function(err, db){
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
})
module.exports = mongoose