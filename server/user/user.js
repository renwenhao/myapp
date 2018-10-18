const express = require('express');

const userRouter = express.Router();

const model = require('../model');
const User = model.getModel('user');

userRouter.get('/list',function(req,res){
    User.find({},function(err,doc){
        if(!err){
            res.json(doc);
        }
    })
})
userRouter.post('/register',function (req,res){
    User.find({username:req.body.username},function(err,doc){
        if(doc.length){
            return res.json({
                msg:'用户名已经存在',
                code:1
            })
        }
        const userInfo = req.body;
        User.create(userInfo,function(err,doc){
            console.log('doc',  doc.username);
            if(err){
                return res.json({
                    'msg':'服务器出错',
                     code:1,
                })
            }else{
                const result = {
                    username:doc.username,
                    password:doc.password,
                    value:doc.value,
                    code:0,
                }
                return res.json(result);
            }
        })
    })
})

module.exports = userRouter