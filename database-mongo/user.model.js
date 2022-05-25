const mongoose = require("mongoose");
const db = require("./index.js");

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    roles: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Role"
        }
    ]
})

const User = mongoose.model("user",userSchema);

module.exports = User;