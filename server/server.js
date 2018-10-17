const express = require('express');
const mongoose = require('mongoose');

const app = express();
const DB_URL = 'mongodb://localhost:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
	console.log('mongo connect success');
});
const Test = mongoose.model('test',new mongoose.Schema({
    a:{
        type:String,
        require:true
    },
    b:{
        type:String,
        require:true
    }
}))

const User = mongoose.model('user',new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
}));
User.create({
    name:'小明',
    age:25
},function(err,doc){
    if(!err){
        console.log('doc:',doc);
    }else{
        console.log('err:',err);
    }
})
app.get('/',function(req,res){
    res.send('<h1>hello express</h1>');
});
app.get('/user',function(req,res){
    User.find({},function(err,doc){
        if(!err){
            res.json(doc)
        }
    })
});
app.get('/add',function(req,res){
    console.log('req',req);
    Test.create({
        a:'aaa',
        b:'bbb'
    },function(err,doc){
        res.json(doc)
    });
});
app.listen(9000,function(){
    console.log('server run at 9000');
})