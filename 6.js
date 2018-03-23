var myModule = require('./6_1');

myModule(process.argv[2], process.argv[3], function (error, data){
	if(error){
		console.log(error);
		return;
	}
	data.forEach(function (file){
			console.log(file);
	});
});