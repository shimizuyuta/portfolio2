
require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.API_PORT || 5000


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../client/build/index.html'));
});

app.listen(PORT, function() {
  console.log(` ==> Server now on port ${PORT}!`);
});