const db = require('../db');

module.exports.login = (req, res)=>{
    res.render('auth/login');
};

module.exports.postLogin = (req, res)=>{
    let email = req.body.email;
    let password = req.body.password;
    let user = db.get('users').find({email: email}).value();
    if(!user){
        res.render('auth/login',{
            errors: [
                'User does not exists.'
            ],
            value: req.body
        });
        return;
    }
    if( password !== user.password ){
        res.render('auth/login',{
            errors: [
                'Wrong password.'
            ],
            value: req.body
        });
        return;
    }
    res.cookie('userId', user.id);
    res.redirect('/users');
};