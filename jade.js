var path = require('path');
var express = require('express');
var app = express();

// tell express where the templates are
app.set('views', path.join(__dirname, "templates/jade"));

// tell express to use the jade templating system
app.set('view engine', 'jade');

app.get('/home', function(req, res){
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);