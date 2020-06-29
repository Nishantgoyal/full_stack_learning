var express = require('express');
var app = express();

app.get('/hello/:count(\\d+)/', function(req, res) {
    var count = Number(req.params.count);
    var out = repeat_print("hello", count);
    res.send(out);
});

app.get("/blah/:count(\\d+)/", function(req, res) {
    var count = Number(req.params.count);
    var out = repeat_print("blah", count);
    res.send(out);
});

function repeat_print(str, count_par) {
    var count = Number(count_par);
    var out = [];
    for (var i = 0; i < count; i++) {
        out.push(str)
    }
    return out.join(" ");
}

var animal_sound = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!'
};

app.get("/speak/:animal/", function(req, res) {
    var animal = req.params.animal;
    if (animal in animal_sound) {
        var sound = animal_sound[animal];
        console.log(sound);
        res.send("The " + animal + " says " + sound);
    } else {
        console.log("Animal...")
        res.send("Sorry, page not found...");

    }
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...");
});

app.listen(8080, function() {
    console.log("Started Server...");
});