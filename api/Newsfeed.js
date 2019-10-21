const router = require("express").Router();
const USer = require("../model/User")
const Newsfeed = require("../model/Newsfeed");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");


// @route   GET api/Newsfeed
// @desc    Get posts
// @access  Public
router.get("/", async (req, res) => {
    const newsfeed = await Newsfeed.find().sort({ date: -1 });
    try {
        if (newsfeed == null || newsfeed.length == 0) {
            res.status(400).send("No post found in this category")
        } else {
            res.json(newsfeed);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route   GET api/newsfeed/comedy
// @desc    Get newfeed by category comedy
// @access  Public
router.get('/comedy', async (req, res) => {
    const newsfeed = await Newsfeed.find({ category: "comedy" }).sort({ date: -1 });
    try {
        if (newsfeed == null || newsfeed.length == 0) {
            res.status(400).send("No post found in this category")
        } else {
            res.json(newsfeed);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route   GET api/newsfeed/lifestyle
// @desc    Get newfeed by category lifestyle
// @access  Public
router.get('/lifestyle', async (req, res) => {
    const newsfeed = await Newsfeed.find({ category: "lifestyle" }).sort({ date: -1 });
    try {
        if (newsfeed == null || newsfeed.length == 0) {
            res.status(400).send("No post found in this category")
        } else {
            res.json(newsfeed);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route   GET api/newsfeed/sport
// @desc    Get newfeed by category sport
// @access  Public
router.get('/sport', async (req, res) => {
    const newsfeed = await Newsfeed.find({ category: "sport" }).sort({ date: -1 });
    try {
        if (newsfeed == null || newsfeed.length == 0) {
            res.status(400).send("No post found in this category")
        } else {
            res.json(newsfeed);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route   GET api/newsfeed/business
// @desc    Get newfeed by category business
// @access  Public
router.get('/business', async (req, res) => {
    const newsfeed = await Newsfeed.find({ category: "business" }).sort({ date: -1 });
    try {
        if (newsfeed == null || newsfeed.length == 0) {
            res.status(400).send("No post found in this category")
        } else {
            res.json(newsfeed);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route   GET api/newsfeed/news
// @desc    Get newfeed by category news
// @access  Public
router.get('/news', async (req, res) => {
    const newsfeed = await Newsfeed.find({ category: "news" }).sort({ date: -1 });
    try {
        if (newsfeed == null || newsfeed.length == 0) {
            res.status(400).send("No post found in this category")
        } else {
            res.json(newsfeed);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route   GET api/newsfeed/:id
// @desc    Get newfeed by id
// @access  Public
router.get('/:id', async (req, res) => {
    const post = req.params.id;
    const newsfeed = await Newsfeed.findById(post);
    try {
        if (newsfeed == null || newsfeed.length == 0) {
            res.status(400).send("No post found by this id")
        } else {
            res.json(newsfeed);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


module.exports = router;