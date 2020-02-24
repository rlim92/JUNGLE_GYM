const express = require("express");
const router = express.Router();
const Exercise = require("../../models/Exercise");

router.get("/", (req, res)=>{
    let exercises = [];
    for (let i = 0; i < 3; i++){
        Exercise.find({ category: req.params.category })
        // TODO: Seed database to mess around here
    }
    return res.json(exercises);
})
router.get("/:id", (req, res)=>{
    res.send(`Exercise # ${req.params.id}`)
})


module.exports = router;