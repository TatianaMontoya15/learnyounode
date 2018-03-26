var http = require('http');
var url = require('url');

var puerto = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	var urlReq = url.parse(req.url, true);  
	var json;
	if(urlReq.pathname === '/api/parsetime'){
		var date = new Date(urlReq.query.iso);
		json = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		}
	}
	if(urlReq.pathname === '/api/unixtime'){
		var date = new Date(urlReq.query.iso);
		json = {
			"unixtime": date.getTime()
		}
	}
	res.write(JSON.stringify(json));
	res.end();
});
server.listen(puerto);

//Acá menos.