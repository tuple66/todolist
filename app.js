const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");

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
 let day = date();
  


  res.render("list", {
    listTitle: day,
    newListItem: items
  });
});

//When the post request comes in the code checks for the title and if work pushes the data onto the work list
//If its from the home page then it pushes the data onto the home list
//it takes the text from the new item and adds it to the array newItems
//it the redirects the page back to the homepage which triggers the above get code


app.post("/", function (req, res) {
 let item = req.body.newItem;
  if(req.body.list === "Work"){
  item = req.body.newItem;
  workItems.push(item);
  res.redirect("/Work");
 } else {
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
 }
});


//When the work page is requested it returns to render the list with the work title and the array set as workitems
//This will then cause 
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work", newListItem: workItems});
});


app.get("/about",function(req,res){
res.render("about")
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});