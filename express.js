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

//MiddleWare
// Middleware routes sy pehlay ata hy
// jab b server request accept krta hy waha sy route k beech ponchnay tak agar aap uss request ko
// beech mn roktay ho and kuch perform krtay ho to yeh element middleware kehlata hy

