// Es6 모듈(Module) 사용
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express"
import userRoutes from "./routes/userRoutes.js"

dotenv.config();
// console.log(process.env.MONGODB_URL);

//------------------------------------
//require('dotenv').config();
//const mongoose = require('mongoose');
//------------------------------------

const server = express();
server.use(express.json());

server.use("/api/user", userRoutes);

mongoose.connect(
    process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //6.0 이상에서 자동으로 설정
      //useCreateIndex: true,
      //useFindAndModify : false,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected to database successfully');
        server.listen(4000, () => console.log("Server started!"));
     }
    }
  );