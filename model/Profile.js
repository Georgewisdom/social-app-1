const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const ProfileSchema = new mongoose.Schema({
  business_name: {
    type: String,
    required: true,
    trim: true
  },
  handler: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  website: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: true,
    trim: true
  },
  social: {
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    twitter: {
      type: String
    }
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  }
});

ProfileSchema.plugin(timestamp);
module.exports = Profile = mongoose.model("Profile", ProfileSchema);
