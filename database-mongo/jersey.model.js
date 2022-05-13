const mongoose = require("mongoose");
const db = require("./index.js");

// database schema
const jerseySchema = new mongoose.Schema({
  name:String,
  desc:String,
  img:String
  
});

const Jersey = mongoose.model("jersey", jerseySchema);

module.exports = Jersey;