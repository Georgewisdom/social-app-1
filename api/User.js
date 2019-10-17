const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const config = require("config");
const authenticate = require("../middleware/authenticate");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// @route   GET api/user/register
// @desc    Register New User
// @access  Public
router.post("/register", async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email: email });

    let transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: 'perfcreg@gmail.com',
             pass: 'perfcreg007'
         }
     });

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

    const mailOptions = {
      from: `application@socialapp.com`, // sender address
      to: `${newUser.email}`, // list of receivers
      subject: 'Kindly Confirm Email', // Subject line
      html: `<p>Kindly Confirm your email to complete your registration process<br>
              kindly click the link below to confirm your email <br>
              https://${req.headers.host}/api/users/verify/${newUser.secretToken}
      </p>`// plain text body
    };

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => {
            jwt.sign(
              { id: user.id },
              config.get("tokenSecret"),
              { expiresIn: 3600 },
              (error, token) => {
                if (error) throw error;
                res.json({
                  token: token,
                  message: "Acount Created",
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }
                });
              }
            );
          })

          .catch(err => console.log(err));
      });
    });

  await transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info);
   });
  
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// @route   GET api/user/register
// @desc    Register New User
// @access  Public
router.post("/login", async (req, res) => {
  // Validation
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Destructuring
  const { email, password } = req.body;
  // Check For User Existence
  const user = await User.findOne({ email });

  if (!user) {
    errors.email = "Not Found";
    return res.status(404).json(errors);
  }

  // Password Validation Strategy
  const pasMatch = bcrypt.compare(password, user.password);

  if (pasMatch) {
    // Generate Token
    jwt.sign(
      { id: user.id, name: user.name },
      config.get("tokenSecret"),
      { expiresIn: 3600 },
      (error, token) => {
        if (error) throw error;
        res.json({
          token: token,
          message: "You are Logged In",
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          }
        });
      }
    );
  } else {
    errors.password = "Password incorrect";
    return res.status(400).json(errors);
  }
});

router.get("/", authenticate, async (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user =>
      res.json({
        message: "You are still Logged In",
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      })
    );
});
module.exports = router;
