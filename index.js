const express = require('express');
const app = express();

const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index',{
        name: 'AAA'
    });
});

app.get('/users', (req, res)=>{
    res.render('users/index', {
        users:[
            {id: 1, name: 'Do'},
            {id: 2, name: 'Thao'}
        ]
    })
});

app.listen(port, ()=>{
    console.log(`Server is ${port}`);
});