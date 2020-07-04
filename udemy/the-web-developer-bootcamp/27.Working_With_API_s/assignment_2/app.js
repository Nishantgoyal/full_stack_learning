const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require('axios');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res) {
    // res.send("Movie API");
    // document.getElementById("data_table").style.display = "none";
    res.render("home.ejs", { data: [] });
})

app.post("/search", function(req, res) {
    let term = req.body.term;
    var url = "http://www.omdbapi.com/?s=" + term + "&apikey=thewdb";
    axios.get(url).then(function(response) {
        console.log(response.data.Search);
        if (response.data.Response === 'True') {
            res.render("home.ejs", { data: response.data.Search });
        } else {
            res.send("ERROR");
        }
    }).catch(function(error) {
        res.send("ERROR");
        console.log(error);
    }).finally(function() {});
});

app.listen(8080, function() {
    console.log("Started app")
});