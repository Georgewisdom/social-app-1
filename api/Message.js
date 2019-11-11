const router = require("express").Router();
const User = require("../model/User");
const authenticate = require("../middleware/authenticate");
const { check, validationResult } = require("express-validator");

// @route    POST api/message/:id
// @desc     send message to a user
// @access   Protected

module.exports = router;
