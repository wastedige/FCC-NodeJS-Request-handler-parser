var express = require('express');
var os = require('os');
var ip = require('ip');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var addr;

  response.send({
    Address: ip.address(),
    OS:  os.type() + " " + os.release() + " " + os.arch(),
    language: request.headers['accept-language'].split(",")[0]
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
