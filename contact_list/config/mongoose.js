//require the library
const mongoose = require('mongoose');

//connect to the db
mongoose.connect("mongodb://localhost/contact_list_db");


//acquire the connection in 'db', to check if it is successfull).
const db = mongoose.connection;

//if error, print this msg
db.on('error', console.error.bind(console, 'error connecting to db'));

//if no error, print this error
db.once('open', function(){
    console.log("successfully connected to the db");
})