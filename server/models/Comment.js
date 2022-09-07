import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    videoId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
