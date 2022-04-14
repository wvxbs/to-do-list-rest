const mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
    id: {
        type: Integer,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    lists: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profile_picture: {
        type: Date,
        required: false,
    },
    registration_date: {
        type: Date,
        required: true,
        default: new Date()
    }
})

var UserData = mongoose.model('UserData', UserSchema)
module.exports = UserData