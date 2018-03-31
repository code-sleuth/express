let express = require('express');

let app = express();

let port = process.env.PORT || 5000;

//use public folder to host static files
app.use(express.static('public'));
//host html files in views folder
app.use(express.static('src/views'));

app.get('/', (req, res) => {
    res.send('Instantiated...');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
