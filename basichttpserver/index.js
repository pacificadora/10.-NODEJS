const http = require('http');
const port = 8000;

function requestHandler(request, response){
    console.log(request.url);
    response.end('Gotcha');
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is running at port: ", port);
});