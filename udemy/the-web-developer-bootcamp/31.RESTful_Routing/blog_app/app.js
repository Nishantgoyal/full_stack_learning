const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser"),
      mongoose    = require("mongoose");

mongoose.connect("mongodb://192.168.2.2/app_blog");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine","ejs");

var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//   title: "First Post",
//   image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80",
//   body: "mountains under white clouds at daytime"
// }, function(err, blog) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Created Blog:");
//     console.log(blog);
//   }
// });

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

app.listen(8080, function() {
    console.log("Restful Blog Post");
});
