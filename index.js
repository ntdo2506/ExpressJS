const express = require('express');
const app = express();

const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', './views');
app.set('view engine', 'pug');

const users = [
    {id: 1, name: 'Do'},
    {id: 2, name: 'Thao'}
];

app.get('/', (req, res)=>{
    res.render('index',{
        name: 'AAA'
    });
});

app.get('/users', (req, res)=>{
    res.render('users/index', {
        users: users
    });
});

app.get('/users/search', (req, res) => {
    let q = req.query.q;
    let matchedUser = users.filter((user) => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1)
    res.render('users/index', {
        users: matchedUser
    });
});

app.get('/users/create', (req, res) => {
    res.render('users/create')
});

app.post('/users/create', (req, res) => {
    users.push(req.body);
    res.redirect('/users');
});

app.listen(port, ()=>{
    console.log(`Server is ${port}`);
});