var mongoose = require('./mongoose');
 
var wineSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    corkCap: String,
    status: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
 });
 
var Wine = mongoose.model('Wine', wineSchema);
 
module.exports = Wine;