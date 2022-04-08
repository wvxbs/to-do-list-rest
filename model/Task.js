const mongoose = require('mongoose')

var TaskSchema = mongoose.Schema({
    id: {
        type: Integer,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    priority: {
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

var TaskData = mongoose.model('TaskData', TaskSchema)
module.exports = TaskData