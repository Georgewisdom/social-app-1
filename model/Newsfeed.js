const timestamps = require("mongoose-timestamp");
const mongoose = require("mongoose");

const NewsfeedSchema = new mongoose.Schema({
    title: {
        type: String
    },
    link: {
        type: String
    },
    category: {
        type: String
    },
    comment: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
            },
            voice: {
                type: String,
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ]
});
NewsfeedSchema.plugin(timestamps);
module.exports = Newsfeed = mongoose.model("Newsfeed", NewsfeedSchema);
