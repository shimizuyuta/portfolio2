'use strict'

const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGO_URI

module.exports = async() => {
  try{
    const conn = await mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    return conn
    
  }catch(err){
    console.log(err,'err_db_connect')
    process.exit(1)
  }
}