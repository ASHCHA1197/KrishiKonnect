const mongoose = require("mongoose");

const CommentSchema  = new mongoose.Schema({
    name: {
        type: String,
        required : [true,'Name is required']
    },
    mobile :{
        type: String,
    },
    body :  {
        type: String,
        required : [true, 'Body is required']
    }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;