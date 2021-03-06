const mongoose    = require("mongoose");

module.exports = mongoose.model("Campground", 
  new mongoose.Schema({
    name: String,
    image: String,
    desc: String,
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }]
  })
);
