var mongoose = require('./mongoose');
var Product = require('./product');
 
var distributorSchema = mongoose.Schema({
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product'
    },
    driverId: {
        type: String,
        required: true
    },
    plateNumber: {
        type: String,
        required: true
    }
 });
 
var Distributor = mongoose.model('Distributor', distributorSchema);
 
module.exports = Distributor;