const mongoose         = require("mongoose");

mongoose.connect("mongodb://192.168.2.2/blog_demo");

Post = require("./models/post");
User = require("./models/user");

// var newPost = new Post({
//   title: "Reflections on Apples... Contd...",
//   content: "They are delicious",
// });
// 
// newPost.save(function(err, post) {
//   if(err) {
//     console.log("Error while creating Post: " + err);
//   } else {
//     User.findOne({name: "Hermione Granger"}, function(err, user) {
//       if(err) {
//         console.log("Error: " + err);
//       } else {
//         user.posts.push(post);
//         user.save(function(err, user) {
//           if(err) {
//             console.log(err);
//           } else {
//             console.log(post);
//             console.log(user);
//           }
//         });
//       }
//     });
//   }
// });

// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "They are delicious",
// });
// 
// newPost.save(function(err, post) {
//   if(err) {
//     console.log("Error while creating Post: " + err);
//   } else {
//     console.log("Created Post: " + post);
//   }
// });

// var newUser = new User({
//   email: "hermione@hogwarts.edu",
//   name: "Hermione Granger"
// });
// 
// newUser.posts.push({
//   title: "How to grow Polyjuice potion", 
//   content: "TODO",
// });
// 
// newUser.save(function(err, user) {
//   if (err) {
//     console.log("Error Creating User: " + err);
//   } else {
//     console.log("Created User: " + user);
//   }
// });

// User.findOne({name: "Hermione Granger"}, function(err, user) {
//   if(err) {
//     console.log("ERROR: " + err);
//   } else {
//     user.posts.push({
//       title: "testing 4",
//       content: "1.. 2.. 3.. 4..",
//     });
//     user.save(function(err, user) {
//       if(err) {
//         console.log("ERROR: " + err);
//       } else {
//         console.log(user);
//       }
//     });
//   }
// });

User.findOne({email: "hermione@hogwarts.edu"}).populate("posts").exec(function(err, user) {
  if(err) {
    console.log(err);
  } else {
    console.log(user);
  }
});
