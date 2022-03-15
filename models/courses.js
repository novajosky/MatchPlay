const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const user = require('./user');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    photos: {
        type: Array,
    }
})
    module.exports = mongoose.model('Courses', coursesSchema);