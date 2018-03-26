let express = require('express');

let app = express()

let port = 5000

app.get('/', function(req, res){
  res.send("Instantiated...")
});

app.listen(port, function(err){
  console.log('running server on port ' + port)
});
