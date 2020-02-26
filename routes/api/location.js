const express = require("express");
const router = express.Router();
const Location = require("../../models/Location");

router.get("/", (req, res) => {
    Location.find({}).then(locations => res.json(locations))
})

router.get("/:id", (req, res) => {
    Location.find({_id: req.params.id}).then(location => res.json(location))
})


module.exports = router;