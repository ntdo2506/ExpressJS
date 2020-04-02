const express = require('express');
const app = express();

const port = 3000;

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

app.listen(port, ()=>{
    console.log(`Server is ${port}`);
});