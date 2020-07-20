const express = require("express"), 
      Campground = require("../models/campgrounds");

var router = express.Router();

router.get("/", function(req, res) {
  Campground.find({}, function(err, campgrounds) {
    if(err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", {
        campgrounds: campgrounds,
        currentUser: req.user
      });
    }
  });
});

router.post("/", isLoggedIn, function(req, res) {
    var new_campground = {
      name: req.body.name,
      image: req.body.image_url,
      desc: req.body.desc,
      author: {
        id: req.user.id,
        username: req.user.username
      }
    };
    Campground.create(new_campground, function(err, campground) {
        if(err) {
          console.log(err);
        } else {
          console.log("Created new Campground");
          console.log(campground);
        }
     });
    res.redirect("/campgrounds");
});

router.get("/new", isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
})

router.get("/:id", function(req, res) {
  Campground.findById(req.params.id).populate("comments").exec(function(err, campground) {
    if (err) {
      res.send("Error");
    } else {
      console.log(campground);
      res.render("campgrounds/show", {campground: campground});
    }
  });
});

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = router;
