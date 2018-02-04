var http = require('http');
var path = require('path');
//bodyParser needs to be installed separately from express
var bodyParser = require('body-parser');
var express = require('express');

var app = express();
//body Parser is required for req.body for express 4.0!
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, '/client/about.html')); 
  //res.sendFile('about');
});

app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, '/client/contact.html')); 
});

app.get('/password', function(req, res){
  res.sendFile(path.join(__dirname, '/client/password.html')); 
});
app.get('/membership', function(req, res){
  res.sendFile(path.join(__dirname, '/client/membership.html'));
});
app.post('/resources', function(req, res){
	console.log("request received!")
	console.log((req.body.thesecretpassword));
	var password = req.body.thesecretpassword;
	if(password == "coyotecoding"){
		console.log("correct password");
		console.log(path.join(__dirname, '/client/resources.html'));
		res.sendFile(path.join(__dirname, '/client/resources.html'));
		//res.send('hello');
	}
})
app.post('*', function(req, res){
	res.send('Beta what??', 404);
});
app.listen(process.env.PORT || 8080);
console.log("Server running on port 8080!")