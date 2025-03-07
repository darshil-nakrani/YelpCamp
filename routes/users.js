const express = require("express");
const router = express.Router();
const passport = require("passport");
const users = require("../controllers/user");
const catchAsync = require("../utilities/catchAsync");

const { storeReturnTo, isLoggedIn } = require('../middleware');

router.route("/register")
    .get(users.renderRegister)
    .post(catchAsync(users.userRegister))

router.route("/login")
    .get(users.loginRender)
    .post(storeReturnTo, passport.authenticate("local", {
        failureFlash: true,
        failureRedirect: "/login"
    }), users.userLogin);

router.get("/logout", users.userLogout);

module.exports = router;