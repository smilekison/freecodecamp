var express = require('express');
var path = require('path');
var app = express();
app.use("/public", express.static( __dirname + "/public"))

app.use("/json", (req, res)=>{return res.json({"message":"Hello json"})});

app.get("/", (req, res)=>{
  return res.sendFile(__dirname + "/views/index.html");
});



































 module.exports = app;
