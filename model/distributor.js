var mongoose = require('./mongoose');
 
var distributorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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