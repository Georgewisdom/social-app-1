const router = require("express").Router();
const Profile = require("../model/Profile");

// @route   GET api/account
// @desc    Edit Profile
// @access  Private
router.get("/edit", (req, res) => {
  res.status(200).json({ msg: "send" });
});

module.exports = router;
