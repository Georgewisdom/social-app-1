const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");

// @route   GET api/user/register
// @desc    Tests users route
// @access  Public
router.post("/register", async (req, res) => {
  try {
    const { name, email, password,  } = req.body;
    const user = await User.findOne({ email: email });
     
    if (user) {
      res.status(400).json({
        errors: [{ msg: "User Already Exist" }]
      });
    }
    function generateRandomString(length) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for ( i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
    const secretToken =  generateRandomString(30);

    const newUser = new User({
      name,
      email,
      password,
      secretToken
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// @route   GET api/user/r
// @desc    Tests users route
// @access  Public

module.exports = router;

//

// [
//        check("name", "Name is required")
//               .not()
//               .isEmpty(),
//        check("email", "Please include a valid email").isEmail(),
//        check(
//               "password",
//               "Please enter a password with 6 or more characters"
//        ).isLength({ min: 6 })
// ],
// //
