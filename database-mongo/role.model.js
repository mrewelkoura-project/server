const mongoose = require("mongoose");
const db = require("./index.js");


const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name:String
    })
);

module.exports = Role;