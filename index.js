const express = require("express");
const path = require("path");
const mongo = require("mongodb");
var ObjectId = require("mongodb").ObjectID;
const favicon = require("express-favicon");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/client/build")));

const router = express.Router();

// this is our MongoDB database
const client = new mongo.MongoClient(
  "mongodb+srv://admin:LmLGdKsWKZJ1EMpj@mycluster-05qfh.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

// connects our back end code with the database
client.connect(err => {
  if (err) console.log("Connection failed");
  else console.log("Connected to the database!");
});

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.post("/login", (req, res) => {
  const db = client.db("myPage");
  const users = db.collection("users");

  users.findOne({ userName: req.body.username }, (err, data) => {
    if (err) {
      console.log("Failed to connect:" + err);
      res.json({ info: "Failed to connect database" });
      res.end();
    } else if (data) {
      if (data.password === req.body.password) {
        res.json({ info: "Logged correctly" });
        res.end();
      } else {
        res.json({ info: "Incorrect password" });
        res.end();
      }
    } else {
      res.json({ info: "User do not exist" });
      res.end();
    }
  });
});

router.post("/message", (req, res) => {
  const { userName, email, message } = req.body;
  const db = client.db("myPage");
  const messages = db.collection("messages");

  messages.insertOne({ userName, email, message }, err => {
    if (err) {
      console.log("Failed to send the message");
      res.json({ sent: false });
      res.end();
    } else {
      console.log("Message sent correctly");
      res.json({ sent: true });
      res.end();
    }
  });
});

router.post("/deleteMessage", (req, res) => {
  const db = client.db("myPage");
  const messages = db.collection("messages");

  const _id = new ObjectId(req.body.id);

  messages.deleteOne({ _id }, err => {
    if (err) {
      console.log("Could not delete message");
      res.end();
    } else {
      console.log("Message deleted");
      res.end();
    }
  });
});

router.get("/getMessages", (req, res) => {
  const db = client.db("myPage");
  const messages = db.collection("messages");

  messages.find({}).toArray((err, data) => {
    if (err) {
      console.log("Failed to download messages");
      res.json({ received: false });
      res.end();
    } else {
      console.log("Received messages: ", data.length);
      res.json({ received: data });
      res.end();
    }
  });
});

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// append /api for our http requests
app.use("/api", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
