const express = require("express");
const router = express.Router();
const Exercise = require("../../models/Exercise");

router.post("/", (req, res)=>{
    const limit = 3;
    const categories = (req.body.categories) ? req.body.categories : "";
    const intensity = (req.body.intensity) ? parseInt(req.body.intensity) : 1;
    Exercise.find({}).then(exercises => {
        const lenExe = exercises.length;
        let workoutNums = [];
        let workoutObject = {};
        while(workoutNums.length < limit){
            let randomNum = Math.floor(Math.random()*lenExe);
            while(true){
                while (workoutNums.includes(randomNum)) { randomNum = Math.floor(Math.random() * lenExe) }
                if(categories !== "" && exercises[randomNum].categories.includes(categories)){
                    break;
                }
            }
            const rW = exercises[randomNum]; // random Workout
            workoutObject[rW.name] = {
                name: rW.name,
                categories: rW.category,
                description: rW.description,
                reps: (rW.reps) ? rW.reps * intensity : null,
                seconds: (rW.seconds) ? rW.seconds * intensity : null,
            };
            workoutNums.push(randomNum);
        }
        workoutObject["categories"] = categories;
        res.json(workoutObject)
    })
})

// router.get("/", (req,res)=>{
//     Exercise.find({}).then(all => res.json(all));
// })

router.get("/:name", (req, res)=>{
    Exercise.findOne({name: req.params.name}).then(exercise => res.json(exercise));
})


module.exports = router;