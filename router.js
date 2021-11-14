const express = require('express');
const router = express.Router();
const User = require('./model/User');
const auth = require('./middleware/auth')
const authController = require('./controller/auth');

router.post('/login',authController.login);
router.post('/signup',authController.signup);

module.exports=router;