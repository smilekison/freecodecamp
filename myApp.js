var express = require("express");
var path = require("path");
var app = express();

let data = { message: "Hello json" };

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    data.message = data.message.toUpperCase();
  }
  return res.json(data);
});

// app.get("/", (req, res) => {
//   return res.sendFile(__dirname + "/views/index.html");
// });

module.exports = app;
