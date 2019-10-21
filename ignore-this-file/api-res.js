import { Mongoose } from "mongoose";

// Reading a feed - API Response
[
  {
    results: [
      {
        actor: "eric",
        foreign_id: "",
        id: "a2a099af-f255-11e9-8c56-12f8ef9c949e",
        object: "1",
        origin: "user:eric",
        target: "",
        time: "2019-10-19T09:48:42.608683",
        verb: "watch",
        video_name: "Star Wars Trailer",
        youtube_id: "JNwNXF9Y6kY"
      },
      {
        actor: "eric",
        foreign_id: "",
        id: "60a60705-f255-11e9-8d68-0a0d7a10423a",
        object: "1",
        origin: "user:eric",
        target: "",
        time: "2019-10-19T09:46:51.914625",
        verb: "watch",
        video_name: "Post-Rock Song",
        youtube_id: "0m_lU2RA9Ak"
      },
      {
        actor: "eric",
        foreign_id: "",
        id: "9228b3d8-f254-11e9-8d62-0a0d7a10423a",
        object: "1",
        origin: "user:eric",
        target: "",
        time: "2019-10-19T09:41:05.482646",
        verb: "watch",
        video_name: "Star Wars Trailer",
        youtube_id: "JNwNXF9Y6kY"
      }
    ],
    next:
      "/api/v1.0/feed/timeline/jessica/?api_key=jvf5pettrzsj&id_lt=9228b3d8-f254-11e9-8d62-0a0d7a10423a&limit=3",
    duration: "9.20ms"
  }
];

// post api structure
[
  {
    kind: "post",
    likeCount: integer,
    moderationStatus: string,
    user: {
      ref: "User",
      type: Mongoose.objectID
    },
    text: string,
    isBlock: Boolean,
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      }
    ],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "Users"
        },
        title: {
          type: String,
          required: true
        },
        name: {
          type: String
        }
      }
    ]
  }
];
