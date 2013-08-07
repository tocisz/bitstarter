var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var idxBuf = fs.readFileSync('index.html')
  var idxHtml = idxBuf.toString()
  response.send(idxHtml);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
