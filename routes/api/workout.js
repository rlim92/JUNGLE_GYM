const express = require("express");
const router = express.Router();
const Workout = require("../../models/Workout");

router.get("/", (req, res) => {
    Workout.find({}).then(workouts => res.json(workouts))
})

router.post("/", (req,res) =>{
    const newWorkout = new Workout({
        exercises_done:req.body.exercises_done,
        location_id: req.body.location_id,

    })
})

router.get("/user/:user_id", (req, res) => {
    Workout.find({user_id: req.params.user_id}).then(workouts => res.json(workouts))
})

router.get("/:id", (req, res) => {
    Workout.find({_id: req.params.id}).then(workout =>{
        res.json(workout)
    })
})
router.patch("/:id", (req, res) => {
    
})


module.exports = router;