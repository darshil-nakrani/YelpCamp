const express = require("express");
const router = express.Router({mergeParams : true});
const catchAsync = require("../utilities/catchAsync");
const reviews = require("../controllers/review");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");


router.post("/", isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete("/:reviewId", isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;