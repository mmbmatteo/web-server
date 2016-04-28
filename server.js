var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAutenthication: function (req, res, next) {
		console.log('Private Route Hit!');
		next();	
	},
	logger : function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' '  + req.originalUrl);
		next();
	}
};

//app.use(middleware.requireAutenthication);
app.get('/login', middleware.logger, function(req, res){
	res.send('Login!');
}); 
/**/
app.use(middleware.logger);

app.get('/about', middleware.requireAutenthication, function(req, res){
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express Server Started on port ' + PORT);
});