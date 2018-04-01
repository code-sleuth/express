let express = require('express');

let app = express();

let port = process.env.PORT || 5000;
let bookRouter = express.Router();

//use public folder to host static files
app.use(express.static('public'));
//host html files in views folder
app.set('views','./src/views');
app.set('view engine', 'ejs');

bookRouter.route('/')
    .get((req, res) => {
        res.send('Hello books');
    });

bookRouter.route('/single')
    .get((req, res) => {
        res.send('Hello Single book');
    });

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
    console.log('running server on port ' + port);
});
