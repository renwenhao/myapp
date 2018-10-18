const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const userRouter = require('./user/user');
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user',userRouter);
app.listen(9000,function(){
    console.log('server run at 9000');
})