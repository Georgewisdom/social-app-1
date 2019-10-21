const express = require("express");
const config = require("config");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Init App
const server = express();

// DB Config
mongoose
  .connect(config.get("mongoURI"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }) // Let us remove that nasty deprecation warrning :)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Middleware
server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: false }));

// Routes
server.use("/api/user", require("./api/User"));
server.use("/api/account", require("./api/Profile"));
server.use("/api/posts", require("./api/Post"));
server.use("/api/newsfeed", require("./api/Newsfeed"));
//

// Config
server.listen(config.get("port"), () => console.log("server process runing"));

