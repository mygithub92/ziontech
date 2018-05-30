var mongoose = require('./mongoose');
 
var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    companyName: {
        type: String,
        required: true
    }
 });
 
var Product = mongoose.model('Product', productSchema);
 
module.exports = Product;