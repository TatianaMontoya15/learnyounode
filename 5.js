var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
fs.readdir(process.argv[2], function (error, files){
	files.forEach(function (file){
		if(ext === path.extname(file).substring(1, file.length)){
			console.log(file);
		}
	});
});
