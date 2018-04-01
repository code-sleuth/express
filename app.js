let express = require('express');

let app = express();

let port = process.env.PORT || 5000;

//use public folder to host static files
app.use(express.static('public'));
//host html files in views folder
app.set('views','./src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {list: ['a','b']});
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});
