var express = require('express');
var app = express();

app.use(express.static("public"));
app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/flw/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {
        thingVar: thing
    });
});

app.get("/posts", function(req, res) {
    var posts = [{
        title: "My Niece is super Cute...",
        author: "Juhi"
    }, {
        title: "I love playing Chess...",
        author: "Papa"
    }];
    res.render("posts.ejs", {
        posts: posts
    });
});
app.listen(8080, function() {
    console.log("Started Server...");
});


//include("partials/header")