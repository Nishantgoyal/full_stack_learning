const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require('axios');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    res.render("landing.ejs");
});

var campgrounds = [{
    name: "@benkleaphoto",
    image: "https://images.unsplash.com/photo-1542067519-6cd1e217df2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
}, {
    name: "movana higgins",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
}, {
    name: "@benkleaphoto",
    image: "https://images.unsplash.com/photo-1542067519-6cd1e217df2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
}, {
    name: "movana higgins",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
}, {
    name: "@benkleaphoto",
    image: "https://images.unsplash.com/photo-1542067519-6cd1e217df2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
}, {
    name: "@benkleaphoto",
    image: "https://images.unsplash.com/photo-1542067519-6cd1e217df2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
}, {
    name: "movana higgins",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
}, {
    name: "@benkleaphoto",
    image: "https://images.unsplash.com/photo-1542067519-6cd1e217df2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
}, {
    name: "movana higgins",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
}];

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds.ejs", {
        campgrounds: campgrounds
    });
})

app.post("/campgrounds", function(req, res) {
    var campground_name = req.body.name;
    var campground_image_url = req.body.image_url;
    campgrounds.push({
        name: campground_name,
        image: campground_image_url
    });
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new_campground.ejs");
})
app.listen(8080, function() {
    console.log("Yelpcamp app")
});