const Task = require('../models/todo');

module.exports.home = function(req, res){
    Task.find({}, function(err, task){
        if(err){console.log("Error in fetching the list from the db"); return;}
        res.render('home', {
            title: "Tasks List",
            todo_list: task,
            //contact_list: contactList,
        });
    })
}