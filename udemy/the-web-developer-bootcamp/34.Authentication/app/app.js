const express               = require("express"),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      LocalStrategy         = require("passport-local"),
      expressSession        = require("express-session"),
      passportLocalMongoose = require("passport-local-mongoose"),
      app                   = express();

mongoose.connect("mongodb://db/secret");
const User = require("./models/user");
app.use(expressSession({
  secret: "this is awesome",
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

app.get("/register", function(req, res) {
  res.render("register");
});

app.post("/register", function(req, res) {
  // res.send("Registered...");
  User.register(new User({
    username: req.body.username
  }), req.body.password, function(err, user) {
    if(err) {
      console.log(err);
      res.redirect("/register");
    } else {
      passport.authenticate("local")(req, res, function() {
        res.redirect("/secret");
      });
      console.log(user);
    }
  });
});

app.get("/login",function(req, res) {
  res.render("login");
});

app.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
}),function(req, res) {});

app.listen(8080, function() {
  console.log("Server Started");
});
