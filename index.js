const express = require("express");

// const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

const jerseyRoutes = require("./routes/jersey.routes");

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
var todos = require("./database-mongo");

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));


app.use("/api", jerseyRoutes)

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
