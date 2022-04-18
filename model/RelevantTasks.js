const mongoose = require('mongoose')

var RelevantTasksSchema = mongoose.Schema({
    id : {
        type: Integer,
        required: true,
        unique: true
    },
    tasks : {
        type : Object,
        required : true
    },
    relevant_date: {
        type: Date,
        required: true,
        default: new Date()
    }
})