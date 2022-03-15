const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());
/// CRUD ( creact, Read, Update, Delete )
const users = [
    {
        id: "1",
        name: "홍기동",
        email: "bbb@com"
    },
    {
        id: "2",
        name: "유재석",
        email: "aaa@com"
    }
];

server.get("/api/user",(req,res) => {
    console.log(users);
    res.json(users);
});

// id 조회
// Get// localhost:3000/api/user/1
// Get// localhost:3000/api/user/홍기동
server.get("/api/user/:id",(req, res) => {
    //console.log(req.params.id);
    const user = users.find( u => {
        return u.id === req.params.id;
    });
    if(user){
        res.json(user);
    }else{
        res.status(404).json({ errorMessage: "User was not found" });
    }
});
// 유저 추가
server.post("/api/user",(req,res) => {
    // console.log(req.body);
    users.push(req.body);
    res.json(users);
});
//Updata
server.put('/api/user/:id',(req,res)=>{
    let foundIndex = users.findIndex(u=>u.id === req.params.id);
    if(foundIndex === -1){
        res.status(404),json({errorMessage:'User was not found'});
    }else{
        users[foundIndex] = {...users[foundIndex], ...req.body};
        //보내기
        res.json(users[foundIndex]);
    }
});
//Delete
server.delete('/api/user/:id',(req,res)=>{
    let foundIndex = users.findIndex(u=>u.id === req.params.id);
    if(foundIndex === -1){
        res.status(404),json({errorMessage:'User was not found'});
    }else{
       let foundUser = users.splice(foundIndex,1);
       res.json(foundUser[0]);
    }
})

server.listen(3000, () => {
    console.log("The Server is running");
});