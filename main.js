const http=require("http");
const url=require("url");
var adress="localhost:8080/?name=Gökhan";
// var q=url.parse(adress,true);
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// console.log(q.query.name);

// var module=require("./module");

http.createServer(function(req,res){
    var q=url.parse(adress,true);
    res.write(q.query.name);
    res.end();
}).listen(8080);