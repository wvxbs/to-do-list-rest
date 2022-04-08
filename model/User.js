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
    creation_date: {
        type: Date,
        required: true,
        default: new Date()
    },
    limitDate: {
        type: Date,
        required: false,
    },
    color: {
        type: String,
        required: false,
        default: ""
    }
})

var UserData = mongoose.model('UserData', UserSchema)
module.exports = UserData