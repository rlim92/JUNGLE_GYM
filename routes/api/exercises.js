const express = require("express");
const router = express.Router();
const Exercise = require("../../models/Exercise");

router.get("/", (req, res)=>{
    const limit = 3;
    const query = (req.body.category !== "All") ? {category: req.body.category} : {};
    Exercise.find(query).then(exercises => {
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

// router.get("/", (req,res)=>{
//     Exercise.find({}).then(all => res.json(all));
// })

router.get("/:name", (req, res)=>{
    Exercise.findOne({name: req.params.name}).then(exercise => res.json(exercise));
})


module.exports = router;