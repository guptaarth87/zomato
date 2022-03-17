const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema, 'User');