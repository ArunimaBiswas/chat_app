const express = require("express");
const { chats } = require("./data/data");  
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get('/',(req,res) => {
    res.send("API is running....");
});

app.get('/api/chat',(req,res) => {
    res.send(chats);
}
);

app.get('/api/chat/:id',(req,res) => {
    // console.log(req.params.id);
    const singchat= chats.find((c) => c._id === req.params.id);
    res.send(singchat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));