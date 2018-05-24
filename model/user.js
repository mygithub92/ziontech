var db = require('./db');

var userSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
 });
 
var User = db.model('User', userSchema);
 
module.exports = User;