var path = require('path');
var express = require('express');
var app = express();

var templatePath = path.join(__dirname, 'templates/stylish_css');
app.use(express.static(templatePath));
app.use(require('stylus').middleware(templatePath));

app.listen(process.argv[2]);