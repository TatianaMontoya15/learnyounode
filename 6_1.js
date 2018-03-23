var fs = require('fs');
var path = require('path');

module.exports = function (ruta, ext, callback){
	ext = '.' + ext;
	fs.readdir(ruta, function (error, files){
		if (error){
			callback(error, null);
			return;
		}
		var arrayFiles = [];
		files.forEach(function (file){
			if(ext === path.extname(file)){
				arrayFiles.push(file);
			}
		});
		callback(null, arrayFiles);
	});	
}

