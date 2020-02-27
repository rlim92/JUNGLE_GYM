const path = require('path');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');

const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const exercises = require("./routes/api/exercises");
const location = require("./routes/api/location");
const workout = require("./routes/api/workout")

app.use(passport.initialize());
require('./config/passport')(passport);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(bodyParser.urlencoded({ extended: false })); // Request to Postman
app.use(bodyParser.json()); // Respond to JSON requests

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch(err => console.log(err));


// const frontendApp = require("./frontend/src/jungle_gym.jsx")
app.use("/api/users", users);
app.use("/api/exercises", exercises);
app.use("/api/locations", location);
// app.use("/api/workouts", workout);
// app.get("/", (req, res) => res.send("Welcome to Jungle Gym!"));
// app.use("/", (req, res) =>
//   res.sendFile("frontend/public/index.html", { root: __dirname })
// );

// Used to seed the database from the seed file
// Comment in, Run, then Comment out to seed database
app.get("/seed", (req, res)=>{
  const seed = require("./seed");
  seed();
  res.send("Seeded database with exercises")
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))