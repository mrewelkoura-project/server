const express = require("express");

const bodyParser = require('body-parser');

const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 8080;

const jerseyRoutes = require("./routes/jersey.routes");

var mrewelkoura = require("./database-mongo");

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use("/api", jerseyRoutes)

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
