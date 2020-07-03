var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

var friends = [
    "friend1",
    "friend2",
    "friend3",
    "friend4",
    "friend5",
];

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.post("/add", function(req, res) {
    var newFriend = req.body.friend;
    console.log(req.body);
    friends.push(newFriend);
    // res.send("Coming from POST ->" + newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends.ejs", {
        friends: friends
    });
});

app.listen(8080, function() {
    console.log("Started Server....");
});