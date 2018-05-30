var mongoose = require('./mongoose');
 
var winerySchema = mongoose.Schema({
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product'
    },
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