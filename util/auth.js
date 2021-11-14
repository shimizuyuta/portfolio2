const jwt = require('jsonwebtoken')

const dotenv = require("dotenv");
dotenv.config();

const generateToken =(user)=>{
  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET,{
    expiresIn:"20h"
  });
  return token
}

module.exports = generateToken;