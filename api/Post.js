const router = require("express").Router();
const Post = require("../model/Posts");
const User = require("../model/User");
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
      check("title", "title is required")
        .not()
        .isEmpty(),
      check("body", "body is required")
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
      // Get user
      const user = await User.findById(req.user.id).select("-password");

      // Create Post
      const newPost = new Post({
        title: req.body.tile,
        body: req.body.body,
        user: user,
        category: req.body.category
      });
      const createdPost = await newPost.save();
      // created activity
      const activity = {
        msg: "you created this post",
        post: [createdPost.id, createdPost.title]
      };
      //add to activity log
      user.activities.unshift(activity);
      // save the changes
      await user.save();
      res.status(200).json(createdPost);
    } catch (error) {
      res.status(500).json({ msg: "server error" });
    }
  }
);
/*
// @route    GET api/post/user
// @desc     get logged in user posts
// @access   Private
router.get("/user", authenticate, async (req, res) => {
  // Get User from db
  try {
    const posts = await Post.find({ user: req.user.id })
      .sort({ date: 1 })
      .populate("user");

    if (posts.length == 0) {
      res.json({ msg: "you have no post" });
    } else {
      res.status(200).json({

        posts
      });
    }
  } catch (error) {
    console.error(error);
  }
});
*/

// @route    GET api/posts
// @desc     get all posts
// @access   Private
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({})
      .sort({ date: 1 })
      .populate("user");

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
  }
});

// @route    GET api/posts/user
// @desc     get current user posts
// @access   Private
router.get("/user", authenticate, async (req, res) => {
  try {
    const posts = await Post.find({})
      .sort({ date: 1 })
      .populate("user");
    // filter list
    const filter = posts.filter(post => post.user.id === req.user.id);
    if (filter.length == 0) {
      res.json({ msg: "you have no post" });
    }
    res.status(200).json(filter);
  } catch (error) {
    console.error(error);
  }
});

// @route    DELETE api/posts/remove/:id
// @desc     delete post
// @access   Private
router.delete("/remove/:id", authenticate, async (req, res) => {
  try {
    // get current post
    const post = await Post.findById(req.params.id);
    // get current user
    const user = await User.findById(req.user.id).select("-password");
    // filter list
    if (post.user.id == user.id) {
      res.status(401).json({ msg: "Unauthorized access" });
    }
    const deletedPost = await post.remove();
    // add activity log
    const activity = {
      msg: "you deleted this post",
      post: [deletedPost.id, deletedPost.title]
    };
    // add activity to user records
    user.activities.unshift(activity);
    // save the changes
    await user.save();
    // send response
    res.status(200).json({
      msg: "deleted"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route    DELETE api/posts/delete/:id
// @desc     delete post
// @access   Private
router.delete("/delete/:id", authenticate, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(400).json({ msg: "No Post Found" });
    }
    const del = await post.remove();
    res.status(200).json({
      msg: "this rubbish post has been deleted jare!, Omo dah dah"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route    PUT api/posts/like
// @desc     like a post
// @access   Private
router.put("/like/:id", authenticate, async (req, res) => {
  try {
    // get current post
    const post = await Post.findById(req.params.id);
    // get current user
    const user = await User.findById(req.user.id).select("-password");
    // Has post been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res
        .status(400)
        .json({ msg: "bro you no fit like two times nah!" });
    }
    // like the post by add to the array
    post.likes.unshift({ user: req.user.id });
    post.likeCount += 1;
    // save the changes
    await post.save();
    // log the activity
    const activity = {
      msg: "you liked this post",
      post: [post.id, post.body]
    };
    // add activity to user
    user.activities.unshift(activity);
    // save changes
    await user.save();
    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error!");
  }
});

// @route    PUT api/posts/hate/:id
// @desc     hate a post
// @access   Private
router.put("/hate/:id", authenticate, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if hated
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res
        .status(400)
        .json({ msg: "come you don hate this post before nah" });
    }

    // Get/Remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);
    post.likeCount -= 1;

    await post.save();

    res.json(post.likes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/posts/comment/:postId
// @desc     write to a post
// @access   Protected
router.post(
  "/comment/:postId",
  authenticate,
  [
    [
      check("comment", "write something please")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    // check for input and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // Get current User
      const user = await User.findById(req.user.id).select("-password");
      // Get current Post
      const post = await Post.findById(req.params.postId);

      // Create a comment object
      const createdComment = {
        comment: req.body.comment,
        name: user.name,
        user: req.user.id
      };

      // Add created comment to list of comments
      post.comments.unshift(createdComment);

      // then saved the post with the changes made
      await post.save();

      // activity log
      const activity = {
        msg: "you commented on this post",
        post: [post.id, post.body]
      };
      // add to activity log
      user.activities.unshift(activity);
      // save user
      await user.save();
      // check

      res.status(200).json(post.comments);
    } catch (error) {
      console.error(error.message);
        createdPost
      });
    } catch (error) {

      res.status(500).json({ msg: "server error" });
    }
  }
);

module.exports = router;
