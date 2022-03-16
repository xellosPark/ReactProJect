const mongoose = require('mongoose');
// const Schema = mongoose.Schema; Object destrcturing
const { Schema } = mongoose;

const userSchema = new Schema(
    {
    email:{
        type:String,
        required:true,
    },
    name:String,
    ge:{
        type:Number,
        min: 18,
        max: 50
    }
      // enrolled:{
        //     type:Date,
        //     default:Date.now
        // }
    },
    {
        timestamps: true
    }
        
);

module.exports = mongoose.model('User', userSchema);