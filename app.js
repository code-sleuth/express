let express = require('express');

let app = express();

let port = process.env.PORT || 5000;
let bookRouter = require('./src/routes/bookRoutes');

//use public folder to host static files
app.use(express.static('public'));
//host html files in views folder
app.set('views','./src/views');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.get('/', (req, res) => {
    res.render('index', {
        title:'Hello from render',
        nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link: '/Authors',
                Text: 'Authors'
            }]
    });
});

app.listen(port, function(err) {
    console.log('running server on PORT ' + port);
});
