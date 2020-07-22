const Campground  = require("../models/campgrounds.js"),
      Comment     = require("../models/comments.js");

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  } else {
    req.flash("error", "Login required..");
    res.redirect("/login");
  }
}

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
  if(req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, campground) {
      if(err) {
        req.flash("error", "Campground not found");
        res.redirect("back");
      } else {
        if(campground.author.id.equals(req.user.id)) {
          next();
        } else {
          req.flash("error", "Permission denied");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "Login required..");
    res.redirect("back");
  }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
  if(req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, comment) {
      if(err) {
        req.flash("error", "Comment not found");
        res.redirect("back");
      } else {
        if(comment.author.id.equals(req.user.id)) {
          next();
        } else {
          req.flash("error", "Permission denied");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "Login required..");
    res.redirect("back");
  }
}

module.exports = middlewareObj;
