var mongoose = require('./mongoose');
 
var grapeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    vineyard: {
        type: String,
        required: true
    },
    block: {
        type: String,
        required: true
    },
    rowRange: String,
    variety: {
        type: String,
        required: true
    },
    vintage: {
        type: Number,
        required: true
    },
    estimatedWeight:  {
        type: Number,
        required: true
    },
    actualWeight:  {
        type: Number,
        required: true
    },
 });
 
var Grape = mongoose.model('Grape', grapeSchema);
 
module.exports = Grape;