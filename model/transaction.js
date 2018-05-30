var mongoose = require('./mongoose');
 
var transactionSchema = mongoose.Schema({
    product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product'
    },
    stageId: {
        type: Number,
        required: true
    },
    start: { 
        type: Date,
        default: Date.now
    },
    end: { 
        type: Date,
        default: Date.now
    }
 });
 
var Transaction = mongoose.model('Transaction', transactionSchema);
 
module.exports = Transaction;