const mongoose = require("mongoose");

const UserSchema  = new mongoose.Schema({
    name: {
        type: String,
        required : [true,'Name is required']
    },
    mobile :{
        type: String,
        required: [true,"Mobile number is required"],
        minLength : 10,
        maxLength : 10
    },
    age : {
        type: Number,
        required: [true,"Age is required"]
    },
    email : {
        type : String,
    },
    land : {
        type: Number,
        required: [true,"Land size is required"],
    },
    address : {
        type: String,
        required : [true, "Address is required"]
    },
    income : {
        type: Number,
        required : [true,"Income is required"]
    },
    photo : {
        type: String
    },
    password : {
        type: String,
        required : [true, "Password is required"]
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;