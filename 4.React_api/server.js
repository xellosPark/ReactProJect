const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

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
    
    res.json(users);
});

server.post("/api/user",(req,res) => {
    // console.log(req.body);
    users.push(req.body);
    res.json(users);
});

server.listen(3000, () => {
    console.log("The Server is running");
});