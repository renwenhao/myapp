const utils = require('utility');
const express = require('express');

const userRouter = express.Router();

const model = require('../model');
const User = model.getModel('user');

userRouter.get('/info',function(req,res){
    res.json({
        code:1
    })
})
userRouter.get('/list',function(req,res){
    User.find({},function(err,doc){
        if(!err){
            res.json(doc);
        }
    })
})

userRouter.post('/login',function(req,res){
    User.find({username:req.body.username,password:req.body.password},{password:0},function(err,doc){
        if(!err){
            if(doc.length){
                res.json({
                    code:0,
                    data:doc[0]
                })
            }else{
                res.json({
                    code:1,
                    msg:'用户名或者密码不正确'
                })
            }
            
        }else{
            res.json({
                code:1,
                msg:'服务端出错'
            })
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