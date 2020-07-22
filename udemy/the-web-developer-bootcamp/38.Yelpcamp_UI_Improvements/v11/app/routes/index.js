const express = require("express"),
      passport  = require("passport"),
      User    = require("../models/users");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("landing.ejs");
});

router.get("/register", function(req, res){
  res.render("register");
});

router.post("/register", function(req, res) {
  var newUser = new User({
    username: req.body.username
  });
  User.register(newUser, req.body.password, function(err, user) {
    if(err) {
      console.log(err);
      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/campgrounds");
      });
    }
  });
});

router.get("/login", function(req, res) {
  res.render("login");
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/campgrounds",
  failureRedirect: "/login"}),
  function(req, res) {
  res.send("Logged In");
});

router.get("/logout", function(req, res) {
  req.logout();
  req.flash("success", "logged you out");
  res.redirect("/campgrounds");
});

module.exports = router;
