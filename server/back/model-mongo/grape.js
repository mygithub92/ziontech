var mongoose = require('./mongoose');
var autopopulate = require('mongoose-autopopulate');

var grapeSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        autopopulate: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
    companyName: {
        type: String,
        required: true
    },
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
    estimatedWeight: {
        type: Number,
        required: true
    },
    actualWeight: Number,
    transferred: {
        type: Boolean,
        default: false
    }
});

grapeSchema.plugin(autopopulate);
var Grape = mongoose.model('Grape', grapeSchema, 'grapes');

module.exports = Grape;