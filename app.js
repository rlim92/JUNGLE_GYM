const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const exercises = require("./routes/api/exercises");
const location = require("./routes/api/location");
const bodyParser = require('body-parser');
const passport = require('passport');
const seed = require("./seed");
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false })); // Request to Postman
app.use(bodyParser.json()); // Respond to JSON requests

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Welcome to Jungle Gym!"));
app.use("/api/users", users);
app.use("/api/workout", exercises);
app.use("/api/location", location);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))