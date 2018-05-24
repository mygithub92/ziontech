var db = require('./db');
 
var winerySchema = db.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    volume: {
        type: Number,
        required: true
    }
 });
 
var Winery = db.model('Winery', winerySchema);
 
module.exports = Winery;