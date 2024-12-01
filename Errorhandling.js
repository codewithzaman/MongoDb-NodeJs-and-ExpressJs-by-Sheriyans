const express = require('express');

const app = express();
//Error handling in express


app.get("/profile", function (req, res, next) {
    return next(new Error("something went wrong"))
    });

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong, We don't have any idea")
    });
    app.listen(3000);