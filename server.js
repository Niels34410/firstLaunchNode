var http = require('http');

var ip = '127.0.0.1';
var port = 12107;

var server = http.createServer(
    function (request,response){
	response.statusCode = 200;
	response.setHeader('Content-Type','text/plain');
	response.end('texte')
}

);

server.listen(port,ip,function(){
    console.log('txt')
});
