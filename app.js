const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/public',express.static(path.join(__dirname, 'public')));

// routes
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

// server started
app.listen("3000",()=> console.log("server started at port 3000"));