var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/login', middleware.logger, function(req, res){
	res.send('Login!');
}); 

app.use(middleware.logger);

app.get('/about', middleware.requireAutenthication, function(req, res){
	res.send('About us!!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express Server Started on port ' + PORT);
});