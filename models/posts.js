const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    title: {
        type: String,
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
})
    module.exports = mongoose.model('Posts', postsSchema);