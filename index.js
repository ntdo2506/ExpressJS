const express = require('express');
const cookieParser = require('cookie-parser');

const useRouter = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const authMiddleware = require('./middlewares/auth.middlewares');

const app = express();
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser())

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index',{
        name: 'AAA'
    });
});

app.use('/auth', authRoute);
app.use('/users', authMiddleware.requireAuth, useRouter);

app.listen(port, ()=>{
    console.log(`Server is ${port}`);
});