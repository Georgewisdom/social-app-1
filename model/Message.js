const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");

const messageSchema = new mongoose.Schema({});

messageSchema.plugin(timestamp);
module.exports = Message = mongoose.model("Message", messageSchema);
