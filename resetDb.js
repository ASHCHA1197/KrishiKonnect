const User = require("./models/User");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/krishiKonnectDb')
    .then(()=>{
        console.log("Database Connected !!");
    })
    .catch((err)=>{
        console.log("Cannot connect to Database");
        console.log(err);
    });

Comment.deleteMany({});
Post.deleteMany({});
User.deleteMany({});