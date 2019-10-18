const router = require("express").Router();
const Profile = require("../model/Profile");
const authenticate = require("../middleware/authenticate");

// @route   GET api/account
// @desc    Edit Profile
// @access  Private
router.get("/edit", async (req, res) => {
  //   Get User
  console.log(req.body);
});

module.exports = router;
