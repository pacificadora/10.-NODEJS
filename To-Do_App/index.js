const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
const db = require('./config/mongoose');

//setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//use the static files
app.use(express.static('./assets'));


//middleware to read url request
app.use(express.urlencoded());

//use express routes
app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){console.log("error in starting the server"); return;}

    console.log("Yeah!! my server is running on port", port);
})
