const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

items = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  date = new Date();
  date = date.toLocaleString("de-DE", options);
  res.render("list", { date: date, listItems: items });
});

app.post("/", (req, res) => {
  items.push(req.body.newItem);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server running on port " + port);
});
