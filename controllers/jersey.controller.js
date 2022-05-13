const Jersey = require("../database-mongo/Jersey.model");

// get the data from the DB
const getJerseys = (req, res) => {
  Jersey.find({})
    .then((data) => {
      console.log(data, "here please");
      res.send(data);
    })
    .catch((err) => {
      console.log(err, "ERROR HAS OCCURED DURING GET REQUEST !");
      res.send(err);
    });
};

// post data into the DB
const createJersey = (req, res) => {

  Jersey.create({
    name: req.body.name,
    desc: req.body.desc,
    img: req.body.img,})
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
// edit existing DB
const editJersey = (req, res) => {
  var jersey = req.body;
  console.log(jersey);
  Jersey.updateOne(jersey)
    .then((jersey) => {
      console.log(jersey);
      res.send(jersey);
    })
    .catch((err) => {
      res.send(err);
    });
};
// delete data from DB
const deleteJersey = (req, res) => {
  var jersey = req.body;
  Jersey.deleteOne(jersey)
    .then((jersey) => {
      res.send(jersey);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getJerseys,
  createJersey,
  editJersey,
  deleteJersey,
};
