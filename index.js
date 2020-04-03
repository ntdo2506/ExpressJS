const express = require('express');
const useRouter = require('./routes/user.route');

const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    res.render('index',{
        name: 'AAA'
    });
});

app.use('/users', useRouter);

app.listen(port, ()=>{
    console.log(`Server is ${port}`);
});