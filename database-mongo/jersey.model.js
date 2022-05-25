const mongoose = require("mongoose");
const db = require("./index.js");

// jerseyData schema
const jerseySchema = new mongoose.Schema({
  name:String,
  desc:String,
  img:String,
  price:String
});

const Jersey = mongoose.model("jersey", jerseySchema);

module.exports = Jersey;