var express = require('express');
var os = require('os');
var ip = require('ip');
var app = express();
app.enable('trust proxy')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var addr;

  response.send({
    Address: request.ip,
    OS:  request.headers['user-agent'].split('(')[1].split(')')[0],
    language: request.headers['accept-language'].split(",")[0]
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
