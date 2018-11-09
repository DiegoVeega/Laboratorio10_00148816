const mongoose = require('mongoose');
const User = require('../models/user');
const bcryt = required('bcrypt');
const AuthMiddleware = {};

AuthMiddleware.isAuthentication = function(req,res, next){
    if(!req.session.user){
        return res.redirect('/');
    }
    else{
        if(!user){
            return res.redirect('/');
        }
        else{
            bcryt.compare(data.userId, user_.id.toString(), function(err, result){
                if(result = true){
                    return next();
                }
                else{
                    return next(err);
                }
            })
        }
    }
}