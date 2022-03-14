const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    golfer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})
    module.exports = mongoose.model('Review', reviewSchema);