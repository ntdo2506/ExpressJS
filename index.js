const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello codersX');
});

app.get('/users', (req, res)=>{
    res.send('Users List');
});

app.listen(port, ()=>{
    console.log(`Server is ${port}`);
});