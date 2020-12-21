const express = require("express");
const bodyParser = require("body-parser");

const app = express();
port = 3000;

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(port, function () {
  console.log("server started");
});
