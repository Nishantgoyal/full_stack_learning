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

router.post("/", function(req, res) {
    var new_campground = {
      name: req.body.name,
      image: req.body.image_url,
      desc: req.body.desc
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

router.get("/new", function(req, res) {
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

module.exports = router;
