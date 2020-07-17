const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser"),
      mongoose    = require("mongoose"),
      axios       = require('axios'),
      Campground  = require("./models/campgrounds"),
      Comment     = require("./models/comments"),
      seedDB      = require("./seeds");

seedDB();
mongoose.connect("mongodb://192.168.2.2/yelpcamp-v2");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/", function(req, res) {
    res.render("landing.ejs");
});

app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, campgrounds) {
    if(err) {
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds: campgrounds});
    }
  });
});

app.post("/campgrounds", function(req, res) {
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

app.get("/campgrounds/new", function(req, res) {
    res.render("campgrounds/new");
})

app.get("/campgrounds/:id", function(req, res) {
  Campground.findById(req.params.id).populate("comments").exec(function(err, campground) {
    if (err) {
      res.send("Error");
    } else {
      console.log(campground);
      res.render("campgrounds/show", {campground: campground});
    }
  });
});

app.get("/campgrounds/:id/comments/new", function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if(err) {
      console.log(err);
    } else {
      res.render("comments/new", {campground: campground});
    }
  });
});

app.post("/campgrounds/:id/comments", function(req, res) {
  Campground.findById(req.params.id, function(err, campground) {
    if(err) {
      console.log(err);
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if(err) {
          console.log(err);
        } else {
          campground.comments.push(comment);
          campground.save();
          res.redirect("/campgrounds/" + req.params.id);
        }
      });
    }
  });
});

app.listen(8080, function() {
    console.log("Yelpcamp app")
});
