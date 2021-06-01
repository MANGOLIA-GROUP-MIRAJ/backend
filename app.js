const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
};
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// this is for public folder
app.use(express.static("public",options));

// routes
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

// server started
app.listen("3000",()=> console.log("server started at port 3000"));