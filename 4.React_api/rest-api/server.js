const mongoose = require('mongoose');
const MONGODB_URL = "mongodb+srv://root:1234@cluster0.ottxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect( MONGODB_URL, { useNewUrlParser: true}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database successfully');
    }
});