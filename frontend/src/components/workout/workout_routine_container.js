import { connect } from "react-redux";
import WorkoutRoutine from "./workout_routine";
import CustomWorkoutForm from "./custom_workout_form";

const mSTP = (state) => {
    return {
        exercises: state.entities.exercises,
        customExercises: state.entities.customExercises 
    };
};

const mDTP = dispatch => {
    return {
        // fetchWorkout: () => dispatch(fetchWorkout())
    };
};

export default connect(mSTP, mDTP)(WorkoutRoutine);