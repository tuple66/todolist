const express = require("express");
const app = express();
let items = [];
let workItems = [];
app.set("view engine", "ejs");
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//This creates the date to be displayed and then calls the list.ejs
//it renders this date with the array of newItems
app.get("/", function (req, res) {

  let today = new Date();
  let options = {
    day: "numeric",
    weekday: "long",
    month: "long",
  };

  let day = today.toLocaleDateString("en-GB", options);

  res.render("list", {
    listTitle: day,
    newListItem: items
  });
});

//This is the receipt of the post request from list.ejs
//it takes the test from the new item and adds it to the array newItems
//it the redirects the page back to the homepage which triggers the above get code 
app.post("/", function (req, res) {
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");

});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work", newListItem: workItems});
});

app.post("/work", function (req, res) {
  item = req.body.newItem;
  workItems.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});