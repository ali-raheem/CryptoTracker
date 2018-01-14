var http = require('http');
var url = require('url');
var fs = require('fs');
var polo = require('./polo');

polo.updateData();
setInterval(polo.updateData, 60*1000);
http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    if('/' == q.pathname) q.pathname = '/index.htm';
    if('/poloData' == q.pathname) {
	res.writeHead(200, {'content-Type': 'text/javascript'});
	res.write("poloData = ");
	res.write(JSON.stringify(polo.getData()));
	res.end();
	return;
    } else {
	var filename = "./web" + q.pathname;
	fs.readFile(filename, (err, data) => {
	    if (err) {
		not_found(res);
	    }else{
		res.writeHead(200);	
		res.write(data);
		res.end();
	    }
	});
    }
}).listen(3000);

function not_found(res){
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404: Not Found');
}
