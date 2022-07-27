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

module.exports.add = function(req, res){
    Task.create(req.body, function(err, task){
        if(err){console.log("error in creating the todo"); return;}
        console.log(task);
        return res.redirect('/');
    })
}

module.exports.delete = function(req, res){
    let id = req.query.id;
    console.log(id);

    let fillCheckBox = Object.keys(id).length;

    for(let i=0; i<fillCheckBox; i++){
        Task.findByIdAndDelete(Object.keys(id)[i], function(err){
            if(err){
                console.log("error in deleteing the contact"); 
                return;
            }
        })
    }
    return res.redirect('/');
}
