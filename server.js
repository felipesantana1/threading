const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "./public/dist")));

app.listen(8887, ()=>{
    console.log("App listening on port 8887");
});

app.all("*", (req, res, next)=>{
    res.sendFile(path.resolve("./public/dist/index.html"));
});