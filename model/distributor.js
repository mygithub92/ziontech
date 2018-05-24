var db = require('./db');
 
var distributorSchema = db.Schema({
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
 
var Distributor = db.model('Distributor', distributorSchema);
 
module.exports = Distributor;