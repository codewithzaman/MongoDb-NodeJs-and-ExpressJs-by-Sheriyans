const express = require('express');

const app = express();
// For middleware write aap.use() pehlay yeh middleware chalay ga pher route chalay ga
app.use(function (req,res,next) {
console.log("Middleware is running");
next();

})

app.use(function (req,res,next) {
    console.log("Middleware is running again");
    next();
    
    })

app.get("/",function(req,res){
    res.send("Hello this is express route ")
}
)
app.get("/about",function(req,res){
    res.send("Hello this is about route ")
}
)


app.listen(3000)

