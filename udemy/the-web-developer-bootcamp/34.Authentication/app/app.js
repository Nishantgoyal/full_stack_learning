const express   = require("express"),
      mongoose  = require("mongoose"),
      app       = express();

mongoose.connect("mongodb://db/secret");

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

app.listen(8080, function() {
  console.log("Server Started");
});
