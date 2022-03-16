const express = require("express");
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const server = express();
const User = require('./models/User')
require('dotenv').config({ path:'variables.env' });
//lonsole.log(process.env.MONGODB_URL);
//const MONGODB_URL = "mongodb+srv://root:1234@cluster0.ottxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

server.get("/",(req, res) => {
  //console.log(req.params.id);
  const newUser = new User();
  newUser.email = "danny@gmail.com";
  newUser.name = "danny";
  newUser.age = 25;
  newUser.save()
    .then((user)=>{
      console.log(user);
      res.json({
        message:'User Created Successfully'
      })
    })
    .catch((err) => {
      res.json({
        message:"User was not Successfully Created"
      })
    })
  });

server.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  } else {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected to database successfully');
      }
    });
  }
});

//mongoose.connect( MONGODB_URL, { useNewUrlParser: true}, (err)=>{
// mongoose.connect( process.env.MONGODB_URL, { useNewUrlParser: true}, (err)=>{
//     if(err){
//       console.log(err);
//     }else{
//       console.log('Connected to database successfully');
//     }
// });