const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('../model/User');
const generateToken = require('../util/auth')
require('dotenv').config();


module.exports={
  login:async(req,res)=>{
    const {password,email} = req.body;
    try{
      //emailとpasswordで一致するユーザー
      let user = await User.find({email})
      user = user[0]
      console.log('user',user)
　　  //ユーザーが存在しない場合
      if(!user) return res.status(400).json({error:'ユーザーが存在しません。'})
      //パスワードの照合
      // const isMatch = await bcrypt.compare(password, user.password);
      // if(!isMatch)return res.status(400).json({error:'パスワードに誤りがあります。'})
      const token = generateToken(user);
      res.status(200).json({id:user.id,username:user.username,provider:user.provider,token:token})
    }
    catch(e){
      res.status(500).json({error:e.message})
    };
  },
  signup:async(req,res)=>{
    try{
      const {password,email,username} = req.body
      let user = await User.findOne(email)
      //既にユーザーが登録されていた時の処理
      if(user) return res.status(500).json({error:'既にユーザーが存在しています。'})
      //新規ユーザー登録
  
      //passwordハッシュ化
      const hashedPassword = bcrypt.hashSync(password, 10)
      user = await User.create({username,email,password:hashedPassword})
      await user.save()
      
      const token = generateToken(user)
      console.log('ユーザーがDBに保存されました')
      res.send({id:user.id,username:user.username,provider:user.provider,token:token})
    }
    catch(e){
    return res.status(500).json({error:'サーバーエラー'})
    }
  }
}