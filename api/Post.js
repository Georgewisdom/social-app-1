const router = require("express").Router();
const Post = require("../model/Posts");
const authenticate = require("../middleware/authenticate");
const { check, validationResult } = require("express-validator");

// @route    POST api/post
// @desc     create a new post
// @access   Private
router.post(
  "/",
  authenticate,
  [
    [
      check("title", "titile is required")
        .not()
        .isEmpty(),
      check("category", "category is required")
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
    try {
      //     Get user
      const user = await User.findById(req.user.id).select("-password");

      // Create Post
      const newPost = new Post({
        title: req.body.tile,
        body: req.body.body,
        name: user,
        category: req.body.category
      });
      const createdPost = await newPost.save();

      res.status(200).json({
        createdPost,
        name: user.name
      });
    } catch (error) {}
  }
);
module.exports = router;
