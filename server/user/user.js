const express = require('express');

const userRouter = express.Router();

const model = require('../model');
const User = model.getModel('user');
// User.remove({},function(err,doc){
//     if(!err){
//         console.log('删除成功');
//     }
// })
console.log('User',User);
userRouter.get('/list',function(req,res){
    User.find({},function(err,doc){
        if(!err){
            res.json(doc);
        }
    })
})
userRouter.post('/register',function (req,res){
    console.log('res',req.body);
    User.find({username:req.body.username},function(err,doc){
        console.log('doc',doc);
        if(doc.length){
            return res.json({
                msg:'用户名已经存在',
                code:1
            })
        }
        const userInfo = req.body;
        console.log('userInfo',userInfo);
        User.create(userInfo,function(err,doc){
            console.log('ddddoc',doc);
            if(err){
                return res.json({
                    'msg':'服务器出错',
                     code:1,
                })
            }else{
                return res.json({
                    code:0,
                });
            }
        })
    })
})

module.exports = userRouter