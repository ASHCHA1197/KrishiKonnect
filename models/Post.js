const mongoose = require("mongoose");
const Comment = require("./Comment");

const PostSchema  = new mongoose.Schema({
    name: {
        type: String,
        required : [true,'Name is required']
    },
    mobile :{
        type: String,
    },
    title : {
        type: String,
        required : [true , 'Title is required']
    },
    body : {
        type: String,
    },
    media : {
        type: String
    },
    likes : {
        type: Number,
        default: 0
    },
    likedby : [String],

    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
});


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;