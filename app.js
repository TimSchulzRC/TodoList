const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

let items = [];
let workItems = [];

app.get("/", function (req, res) {
  let date = new Date();
  date = date.toLocaleString("de-DE", options);
  res.render("list", { listTitle: date, listItems: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", listItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("server running on port " + port);
});
