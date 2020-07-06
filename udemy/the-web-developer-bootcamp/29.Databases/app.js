const mongoose = require('mongoose');

mongoose.connect("mongodb://192.168.2.2/yelpcamp")

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var cat_1 = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// cat_1.save(function(err, cat) {
//     if (err) {
//         console.log("Something went wrong..!!");
//     } else {
//         console.log("We saved the Cat...!!");
//         console.log(cat);
//     }
// });

Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Something went Wrong...!!!")
        console.log(err)
    } else {
        cats.forEach(function(cat) {
            console.log("<<<<<<<<<==========>>>>>>>>>")
            console.log(cat);
        });
    }
});