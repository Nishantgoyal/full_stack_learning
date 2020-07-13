const express        = require("express"),
      app            = express(),
      bodyParser     = require("body-parser"),
      methodOverride = require("method-override"),
      mongoose       = require("mongoose");

mongoose.connect("mongodb://192.168.2.2/app_blog");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine","ejs");

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Routes

app.get("/", function(req, res) {
  res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
  Blog.find({}, function(err, blogs) {
    if(err) {
      console.log("Error in finding blogs");
      console.log(err);
    } else {
      console.log("Retrieved blogs successfully");
      res.render("index", {blogs: blogs});
    }
  });
});

app.get("/blogs/new", function(req, res) {
  res.render("new");
});

app.post("/blogs", function(req, res) {
  Blog.create(req.body.blog, function(err, blog) {
    if(err) {
      console.log("ERROR");
      console.log(err);
      res.render("new");
    } else {
      res.redirect("/blogs");
    }
  });
});

app.get("/blogs/:id", function(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
    if(err) {
      console.log("Error");
      console.log(err);
      res.render("/blogs");
    } else {
      res.render("show", {blog:blog});
    }
  });
});

app.get("/blogs/:id/edit", function(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
    if(err) {
      console.log("Error");
      console.log(err);
      res.render("/blogs");
    } else {
      res.render("edit", {blog: blog});
    }
  });
});

app.put("/blogs/:id", function(req, res) {
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, blog) {
    if(err) {
      console.log("Error");
      console.log(err);
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

app.listen(8080, function() {
    console.log("Restful Blog Post");
});
