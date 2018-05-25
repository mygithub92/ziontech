var mongoose = require('./mongoose');
 
var winerySchema = mongoose.Schema({
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
 
var Winery = mongoose.model('Winery', winerySchema);
 
module.exports = Winery;