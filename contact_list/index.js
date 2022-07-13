const express = require('express');
const path = require('path');
//path is an inbuilt module in nodejs hence there is no need to install path
const port = 8000;
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

//creating middleware1
// app.use(function(req, res, next){
//     console.log('MW1 is called');
//     next();
// })

// // creating middleware2
// app.use(function(req, res, next){
//     console.log('MW2 is called');
//     next();
// })


var contactList = [
    {
        name: "Aman",
        phone: "8200995426"
    },
    {
        name: "Aman",
        phone: "8200995426"
    },
    {
        name: "Aman",
        phone: "8200995426"
    },
    {
        name: "Aman",
        phone: "8200995426"
    }
]
//whenever the request comes in we need to send back something then only it will be able to print the stuff.
app.get('/', function(req, res){
    // console.log(__dirname);
    // res.send("<h2> cool, it is running now! </h2>")
    res.render('home', {
        title: "Contact List",
        contact_list: contactList,
    });
})


app.get('/delete-contact/', function(req, res){
    console.log(req.query);
})


//flow -> form filled -> submit -> action route(create-contact in this case) -> redirect(practice in this case).
app.post('/create-contact', function(req, res){
    //return res.redirect('/practice');
    // console.log(req.body.name);
    // console.log(req.body.phone);
    // console.log(req.body);
    contactList.push({
        name: req.body.name,
        phone: req.body.phone,
    })
    return res.redirect('/');
})



//initially when we wrote the server without express framework, it simply kept on loading but there was no result
//but when we wrote the server using express, it loaded, gave the ouput as well...thats why we use frameworks.
app.listen(port, function(err){
    if(err){
        console.log("Error in running the server", err);
    }
    console.log("Yay, my server is running on port number:",port);
})