
require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = process.env.PORT || 5000
const router = require('./router')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//DB
const initConnection = require('./config/connection')
initConnection()
.then((data)=>{
  console.log('db connect')
})
// app.get('/', (req, res) => {
//   res.send(200);
// });



//本番環境
if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build' ));    
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); 
  });
}

//開発環境
app.get('/',router)




app.listen(PORT, function() {
  console.log(` ==> Server now on port ${PORT}!`);
});