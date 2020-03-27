const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises_done: [
        {
            type: Schema.Types.ObjectId,
            ref: 'exercises'
        }
    ],
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
});

module.exports = Workout = mongoose.model("workout", WorkoutSchema);
