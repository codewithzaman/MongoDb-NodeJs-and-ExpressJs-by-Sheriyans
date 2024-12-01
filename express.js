// Expressjs Framework
// introduction to expressjs >>> MERN Stack have expressjs 
// expressjs aik npm package hy . yeh aik framework hy . manages everything from receiving the request and 
// giving the response 
// setting up a basic express application
const express = require('express');

const app = express();
// create routes 
// app.get(route,requestHandler)
app.get("/",function(req,res){
    res.send("Hello this is express route ")
}
)
app.get("/profile",function(req,res){
    res.send("Hello this is express route profile of nader zaman ")
}
)
app.listen(3000)


