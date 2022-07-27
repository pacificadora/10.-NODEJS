const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
const db = require('./config/mongoose');




app.listen(port, function(err){
    if(err){console.log("error in starting the server"); return;}

    console.log("Yeah!! my server is running on port", port);
})
