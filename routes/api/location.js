const express = require("express");
const router = express.Router();
const Location = require("../../models/Location");

router.get("/", (req, res) => {
    res.send("All the locations")
})
router.get("/:id", (req, res) => {
    res.send(`Location # ${req.params.id}`)
})


module.exports = router;