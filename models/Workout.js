const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exercises_done: [
        {
            type: Schema.Types.ObjectId,
            ref: 'exercises'
        }
    ],
    location_id: {
        type: Schema.Types.ObjectId,
        ref: 'locations'
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    completed:{
        type: Boolean,
        default: false
    },
    start_time:{
        type: Date,
        default: Date.now
    },
    end_time:{
        type: Date
    }
});

module.exports = Workout = mongoose.model("workout", WorkoutSchema);
