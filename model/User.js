const timestamps = require("mongoose-timestamp");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    min: 4,
    max: 255,
    unique: true
  },

  secretToken: {
    type: String
  },

  isVerified: {
    type: Boolean,
    default: false,
    required: true
  },
  passwordResetToken: {
    type: String
  },
  passwordResetExpires: {
    type: Date
  },
  posts: mongoose.Schema.Types.Array
});
UserSchema.plugin(timestamps);
module.exports = User = mongoose.model("User", UserSchema);
