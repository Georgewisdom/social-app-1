const router = require("express").Router();
const Profile = require("../model/Profile");
const User = require("../model/User");
const authenticate = require("../middleware/authenticate");
const { check, validationResult } = require("express-validator");

// @route    GET api/account
// @desc     Get current users profile
// @access   Private
router.get("/", authenticate, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "User",
      ["name"]
    );

    if (!profile) {
      return res.status(400).json({ msg: "Please complete your profile" });
    }

    const user = await User.findOne({ _id: req.user.id });

    res.json({
      profile,
      user: {
        name: user.name,
        email: user.email
      }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/account/:id
// @desc     Get current users profile by ID
// @access   Private
router.get("/:id", authenticate, async (req, res) => {
  try {
    const profile = await Profile.findOne({ _id: req.params.id });

    if (!profile) {
      return res.status(400).json({ msg: "Please complete your profile" });
    }

    res.json({
      profile
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/account
// @desc    Edit Profile & Create Profile
// @access  Private
router.post(
  "/edit",
  authenticate,
  [
    [
      check("business_name", "Business Name is required")
        .not()
        .isEmpty(),
      check("handler", "Handler is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    //   Check for validity
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //   destructure
    const {
      business_name,
      handler,
      website,
      email,
      bio,
      gender,
      isComplete,
      dateOfBirth,
      facebook,
      instagram,
      twitter
    } = req.body;

    // Init Profile Build
    const profileBuild = {};
    profileBuild.social = {};
    //   Set Profile Build
    profileBuild.user = req.user.id;
    //   Value Builds
    if (business_name) profileBuild.business_name = business_name;
    if (handler) profileBuild.handler = handler;
    if (website) profileBuild.website = website;
    if (email) profileBuild.email = email;
    if (bio) profileBuild.bio = bio;
    if (gender) profileBuild.gender = gender;
    if (isComplete) profileBuild.isComplete = isComplete;
    if (dateOfBirth) profileBuild.dateOfBirth = dateOfBirth;
    if (twitter) profileBuild.social.twitter = twitter;
    if (facebook) profileBuild.social.facebook = facebook;
    if (instagram) profileBuild.social.instagram = instagram;

    //       Create Profile
    Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileBuild },
      { new: true, upsert: true }
    )
      .then(profile => {
        res.json({
          profile: profile,
          message: profile.isComplete
            ? "profile created"
            : "please endeavour to complete profile",
          request: {
            type: "get",
            url: "http://localhost:5000/api/user/" + profile.user
          }
        });
      })
      .catch(error => console.log(error));
  }
);

module.exports = router;
