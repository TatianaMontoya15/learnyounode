var http = require('http');
var bl = require('bl');
var url_1 = process.argv[2];
var url_2 = process.argv[3];
var url_3 = process.argv[4];

http.get(url_1, function(response){
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
		data = data.toString();
		console.log(data);
		http.get(url_2, function(response2){
			response2.pipe(bl(function (err, data2) {
				data2 = data2.toString();	
				console.log(data2);
				http.get(url_3, function(response3){
					response3.pipe(bl(function (err, data3) {
						data3 = data3.toString();
						console.log(data3);
					}));
				});
			}));
		});
	}));
});
	