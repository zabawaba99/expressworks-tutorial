var crypto = require('crypto');
var express = require('express');
var app = express();

app.put("/message/:id", function(req, res) {
  var sha = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex');

  res.send(sha);
});

app.listen(process.argv[2]);