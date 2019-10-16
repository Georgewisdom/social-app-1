const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {
      res.status(400).json({
        errors: [{ msg: "User Already Exist" }]
      });
    }

    const newUser = new User({
      name,
      email,
      password
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
