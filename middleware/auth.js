const jwt = require("jsonwebtoken");
const User = require('../models/User');

const verifyToken = (req,res,next) =>{
  const token = req.header('x-auth-token');
  if(token){
    //tokenを確かめる
    jwt.verify(token,process.env.JWT_SECRET,function(error,decoded){
      if(error){
        console.log('Verification failed! ', error)
        return res.status(403).json({
          // auth:false,
          error:'トークンの認証に失敗しました。'
        })
      }
      else{
        console.log(decoded,'decoded')
        req.user=decoded
        next()
      }
    });
  }else{
    return res.status(401).json({
      // auth:false,
      error:'トークンがありません。'
    })
  }
}

module.exports = verifyToken