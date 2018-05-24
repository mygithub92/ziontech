var db = require('./db');
 
var transactionSchema = db.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
 
var Transaction = db.model('Transaction', transactionSchema);
 
module.exports = Transaction;