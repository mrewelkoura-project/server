const mongoose = require("mongoose");
// const mongoUri = "mongodb://localhost/mrewelkoura";

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.User = require("./user.model");
db.Role = require("./role.model");
db.ROLES = ["user","admin","moderator"];
// connecting the database


// mongoose.connect(
//   mongoUri,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   () => {
//     console.log("Successfully connected to mongoDB.");
//   }
// );

// const db = mongoose.connection;

module.exports = db;