const express               = require("express"),
      mongoose              = require("mongoose"),
      passport              = require("passport"),
      bodyParser            = require("body-parser"),
      localStrategy         = require("passport-local"),
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
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

app.listen(8080, function() {
  console.log("Server Started");
});
