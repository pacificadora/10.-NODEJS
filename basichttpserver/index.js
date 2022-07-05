const http = require('http');
const port = 8000;

function requestHandler(request, response){
    console.log(request.url);
    response.writeHead(200, {'content-type': 'text/html'})
    response.end('<h1>Gotcha</h1');

}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running at port: ", port);
});