const express = require('express');
const { signUp, signIn } = require('../controller/userController');
const userRouter = express.Router();

userRouter.post('/singUp', signUp);
userRouter.get('/signIn',(req, res)=>{
    res.send("this is signin Page");
} );

module.exports = userRouter;