const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    views: { type: Number, default: 0},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment"}],
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;