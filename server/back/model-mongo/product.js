var mongoose = require('./mongoose');
 
var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
 });
 
var Product = mongoose.model('Product', productSchema);
 
module.exports = Product;