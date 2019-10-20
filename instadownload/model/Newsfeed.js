const timestamps = require("mongoose-timestamp");
const mongoose = require("mongoose");

const NewsfeedSchema = new mongoose.Schema({
  title: {
    type: String
  },
  link:{
    type: String
  }
});
NewsfeedSchema.plugin(timestamps);
module.exports = Newsfeed = mongoose.model("Newsfeed", NewsfeedSchema);
