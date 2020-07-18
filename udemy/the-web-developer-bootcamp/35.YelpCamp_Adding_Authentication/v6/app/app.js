const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser"),
      mongoose    = require("mongoose"),
      passport    = require("passport"),
      localStrategy = require("passport-local"),
      axios       = require('axios'),
      Campground  = require("./models/campgrounds"),
      Comment     = require("./models/comments"),
      User        = require("./models/users"),
      seedDB      = require("./seeds");

seedDB();
mongoose.connect("mongodb://db/yelpcamp");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.use(require("express-session")({
  secret: "12345",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.get("/register", function(req, res){
  res.render("register");
});

app.post("/register", function(req, res) {
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

app.get("/login", function(req, res) {
  res.render("login");
});

app.post("/login", passport.authenticate("local", {
  successRedirect: "/campgrounds",
  failureRedirect: "/login"}),
  function(req, res) {
  res.send("Logged In");
});

app.listen(8080, function() {
    console.log("Yelpcamp app")
});
