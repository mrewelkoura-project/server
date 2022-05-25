const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();

var corsOptions = {
  origin:"http://localhost:8081"
};
app.use(cors(corsOptions));
//parse requests of content-type - application/json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name:"hello-session",
    secret:"COOKIE_SECRET",
    httpOnly:true
  })
);

const db = require("./database-mongo")
const mongoUri = "mongodb://localhost/mrewelkoura";
const Role = db.Role;
db.mongoose
  .connect(
    mongoUri,
{ useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
  console.log("mongoDB connected!");
  initial();
})
.catch(err=>{
  console.error("Connection error",err);
  process.exit();
});

function initial(){
  Role.estimatedDocumentCount((err,count)=>{
    if(!err&&count===0){
      new Role({
        name:"user"
      }).save(err=>{
        if(err){
          console.log("error",err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name:"moderator"
      }).save(err=>{
        if(err){
          console.log("error",err);
        }
        console.log("added 'moderator' to roles collection")
      });
      new Role({
        name:"admin"
      }).save(err=>{
        if(err){
          console.log("error",err);
        }
        console.log("added 'admin' to roles collection")
      });
    }
  });
}
// routes 
const jerseyRoutes = require("./routes/jersey.routes");
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(express.static(__dirname + "/../client/public"));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use("/api", jerseyRoutes)

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
