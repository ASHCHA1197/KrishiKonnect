const mongoose = require("mongoose");

const PolicySchema  = new mongoose.Schema({
    name : {
        type: String,
        required : [true,'Name is required']
    },
    body :{
        type: String,
        required : [true, 'Body is required']
    },
    age :  {
        type: Number,
        required : [true, 'Age is required']
    },
    land : {
        type: Number,
        required : [true, 'Land is required']
    },
    income : {
        type : Number,
        required : [true, "Income is required"]
    }
});

const Policy = mongoose.model("Policy", PolicySchema);

const addPolicies = async(req,res)=>{
    await Policy.deleteMany({});
    await Policy.insertMany([

    ])
}

add.Policies();

module.exports = Policy;



