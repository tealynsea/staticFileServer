var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
//index page.  Still prints "Hello Boulder"
app.get('/', function(req, res) {
	res.render('index');
});



//Part 2
//created a separate page with '/file'.
/*app.get('/file', function(req, res) {
var fileContents = fs.readFileSync('data.txt');
	res.header('Content-Type', 'text/html');
	res.send(fileContents);
	console.log('file contents', fileContents);
});*/



//asynchronus.  Got stuck with what to put in res.sen()calling data
app.get ('/file', function(req,res) {
 
 fs.readFile('data.txt', function(err, data) {
		res.header('Content-Type', 'text/html');
		res.send(data);
	});
});

 

var server = app.listen(9349, function() {
	console.log('Express server listening on port ' + server.address().port);
});
