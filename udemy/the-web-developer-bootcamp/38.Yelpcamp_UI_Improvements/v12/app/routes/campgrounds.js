const express = require("express"), 
      Campground = require("../models/campgrounds"),
      middleware = require("../middleware/index.js");

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

router.post("/", middleware.isLoggedIn, function(req, res) {
    var new_campground = {
      name: req.body.name,
      image: req.body.image_url,
      description: req.body.description,
      price: req.body.price,
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

router.get("/new", middleware.isLoggedIn, function(req, res) {
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

router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    res.render("campgrounds/edit", {campground: campground});
  });
});

router.put("/:id", middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, campground) {
    if(err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

router.delete("/:id",middleware.checkCampgroundOwnership, function(req, res) {
  Campground.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

module.exports = router;
