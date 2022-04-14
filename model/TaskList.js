const mongoose = require('mongoose')

var TaskListSchema = mongoose.Schema({
    id: {
        type: Integer,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        required: true,
        default: new Date()
    },
    icon: {
        type: Date,
        required: false,
    },
    completed_tasks: {
        type: String,
        required: false,
        default: ""
    }
})

var TaskListData = mongoose.model('TaskListData', TaskListSchema)
module.exports = TaskListData