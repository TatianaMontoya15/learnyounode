var fs = require('fs');
fs.readFile(process.argv[2], function (error, buf){
	var str = buf.toString();
	console.log(str.split('\n').length - 1);
});
