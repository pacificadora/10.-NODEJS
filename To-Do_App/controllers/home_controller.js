const Task = require('../models/todo');

//this is a single page applications

//creating controller for the home page display
module.exports.home = function(req, res){
    Task.find({}, function(err, task){
        if(err){console.log("Error in fetching the list from the db"); return;}
        res.render('home', {
            title: "Tasks List",
            todo_list: task,
            //this task list is going to home.ejs
            //contact_list: contactList,
        });
    })
}


//creating the controller for adding the task into the db
module.exports.add = function(req, res){
    Task.create(req.body, function(err, task){
        if(err){
            console.log("error in creating the todo"); 
            return;
        }
        console.log(task);
        return res.redirect('/');
    })
}


//creating the controller for deleting the task from the db
module.exports.delete = function(req, res){
    let id = req.query.id;
    console.log(id);

    //let fillCheckBox = Object.keys(id).length;

    //since there is a functionality of checkbox - hence counting the checkbox marked and deleting them through the loop.
    Task.findByIdAndDelete(id, function(err){
        if(err){
            console.log("error in deleteing the contact"); 
            return;
        }
        return res.redirect('/');
    })
}
