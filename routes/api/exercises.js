const express = require("express");
const router = express.Router();
const Exercise = require("../../models/Exercise");

router.get("/random", (req, res)=>{
    const limit = 3;
    const query = (req.body.category) ? {category: req.body.category} : {};
    Exercise.find(query).then(exercises => {
        const workouts = {};
        const lenExe = exercises.length;
        if(lenExe <= limit){
            res.json(exercises)
        } else {
            let workoutNums = [];
            let workoutObject = {};
            while(workoutNums.length < limit){
                let randomNum = Math.floor(Math.random()*lenExe);
                while(workoutNums.includes(randomNum)){randomNum = Math.floor(Math.random()*lenExe)}
                workoutObject[exercises[randomNum].name] = exercises[randomNum];
                workoutNums.push(randomNum);
            }
            res.json(workoutObject)
        }
    })
})

router.get("/", (req,res)=>{
    Exercise.find({}).then(all => res.json(all));
})

router.get("/:id", (req, res)=>{
    Exercise.findOne({_id: req.params.id}).then(exercise => res.json(exercise));
})


module.exports = router;