const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    commenter: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;