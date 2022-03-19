var express = require("express");
var path = require("path");
var app = express();

let message = { message: "Hello json" };
app.get("/json", (request, response) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.json({ message: "HELLO JSON" });
  } else { 
    response.json(message);
  }
});

// app.get("/", (req, res) => {
//   return res.sendFile(__dirname + "/views/index.html");
// });

module.exports = app;
