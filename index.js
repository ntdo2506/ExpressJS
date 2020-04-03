const express = require('express');
const app = express();

const port = 3000;

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []}).write();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index',{
        name: 'AAA'
    });
});

app.get('/users', (req, res)=>{
    res.render('users/index', {
        users: db.get('users').value()
    });
});

app.get('/users/search', (req, res) => {
    let q = req.query.q;
    let matchedUsers = db.get('users').value().filter(user => {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });
});

app.get('/users/create', (req, res) => {
    res.render('users/create')
});

app.post('/users/create', (req, res) => {
    db.get('users').push(req.body).write();
    res.redirect('/users');
});

app.listen(port, ()=>{
    console.log(`Server is ${port}`);
});