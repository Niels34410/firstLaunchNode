//var http = require('http');
//
//var ip = '127.0.0.1';
//var port = 12107;
//
//var server = http.createServer(
//    function (request,response){
//	response.statusCode = 200;
//	response.setHeader('Content-Type','text/plain');
//	response.end('texte')
//}
//
//);
//
//server.listen(port,ip,function(){
//    console.log('txt')
//});
var express = require('express');

var serveur = express();
var routeToto = "/toto";

serveur.get("/",function(request,response){
    response.sendFile(__dirname + "/views/index.html");
});
serveur.get(routeToto,function(request,response){
    response.send("message venant de toto");
});
serveur.post("/toto",function(request,response){
    response.send("message venant de toto en post");
});

serveur.listen(process.env.PORT || 12107);
