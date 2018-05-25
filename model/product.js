var mongoose = require('./mongoose');
 
var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyName: {
        type: String,
        required: true
    },
    grape: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Grape'
    },
    winery: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Winery'
    },
    wine: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Wine'
    },
    distributions: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Distributor'
    }],
    transactions: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Transaction'
    }]
 });
 
var Product = mongoose.model('Product', productSchema);
 
module.exports = Product;