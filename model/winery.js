var mongoose = require('./mongoose');
 
var winerySchema = mongoose.Schema({
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product'
    },
    volume: {
        type: Number,
        required: true
    },
    bottler: {
        type: String,
        required: true
    },
    transferred: {
        type: Boolean,
        default: false
    }
 });
 
var Winery = mongoose.model('Winery', winerySchema, 'wineries');
 
module.exports = Winery;