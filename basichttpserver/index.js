const http = require('http');
const port = 8000;
const fs = require('fs');
//fs is a module just like http is a module in NodeJs
//fs is a built in module in NOdeJs which is used to read and write into or from the files.

function requestHandler(request, response){
    console.log(request.url);
    response.writeHead(200, {'content-type': 'text/html'})
    //response.end('<h1>Gotcha</h1');

    //fs = built in module
    //readfile = built in asynchronous module in fs
    //this is the file path
    //function created - err = error if any and data = data on the html file 
    // fs.readFile('./index.html', function(err, data){
    //     if(err){
    //         console.log("there is an error");
    //         return response.end('<h1>Error</h1');
    //     }
    //     return response.end(data);
    // });

    let filePath;
    switch(request.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break;
        
        default:
            filePath = './404.html'
            break;
    }

    fs.readFile(filePath, function(err, data){
        if(err){
            console.log('there is an error');
            return response.end('<h1>Error</h1>')
        }
        return response.end(data);
    })
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running at port: ", port);
});