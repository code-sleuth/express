let express = require('express');
let bookRouter = express.Router();

let books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich',
        read: false
    },
    {
        title: 'Weap not Child',
        genre: 'Historical Fiction',
        author: 'Chinua Achebe',
        read: false
    },
    {
        title: 'Tom Browns School Days',
        genre: 'Fiction',
        author: 'Charles Dickens',
        read: false
    },
    {
        title: 'Modern Money Mechanics',
        genre: 'Finance',
        author: 'Federal Reserve',
        read: false
    },
    {
        title: 'Introduction to Algorithms',
        genre: 'Software Engineering',
        author: 'Thomas H. Cormen',
        read: true
    }
];

bookRouter.route('/')
    .get((req, res) => {
        res.render('Books',{
            title:'Hello from render',
            nav: [{
                    Link: '/Books',
                    Text: 'Books'
                }, {
                    Link: '/Authors',
                    Text: 'Authors'
                }],
            books: books
        });
    });

bookRouter.route('/single')
    .get((req, res) => {
        res.send('Hello Single book');
    });

module.exports = bookRouter;