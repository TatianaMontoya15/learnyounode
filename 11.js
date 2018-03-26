var http = require('http');
var fs = require('fs');

var puerto = Number(process.argv[2]);
var ruta = process.argv[3];

var server = http.createServer(function (req, res) {
	var stream = fs.createReadStream(ruta);
	stream.pipe(res);;
});
server.listen(puerto);

// res.writeHead(200, { 'content-type': 'text/plain' })
//No entendí qué hice acá.