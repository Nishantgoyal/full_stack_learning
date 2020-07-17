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
      res.render("index.ejs", {campgrounds: campgrounds});
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
    res.render("new_campground.ejs");
})

app.get("/campgrounds/:id", function(req, res) {
  console.log("ID: " + req.params.id);
  Campground.findById(req.params.id).populate("comments").exec(function(err, campground) {
    if (err) {
      res.send("Error");
    } else {
      console.log(campground);
      res.render("show.ejs", {campground: campground});
    }
  });
});

app.listen(8080, function() {
    console.log("Yelpcamp app")
});
