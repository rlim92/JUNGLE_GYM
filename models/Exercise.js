const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    category:{
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reps: {
        type: Number
    },
    seconds: {
        type: Number
    }
})

module.exports = Exercise = mongoose.model('exercise', ExerciseSchema)