const mongoose = require('mongoose');

//creating the db for our application - JSON format
const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    }
})

const Task = mongoose.model('Task', listSchema);
module.exports = Task;