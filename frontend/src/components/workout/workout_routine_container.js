import { connect } from "react-redux";
import WorkoutRoutine from "./workout_routine";
import { fetchExercises } from '../../actions/exercises_actions';

const mSTP = (state) => {
    return {
        exercises: state.entities.exercises
    };
};

const mDTP = dispatch => {
    return {
        // fetchWorkout: () => dispatch(fetchWorkout())
    };
};

export default connect(mSTP, mDTP)(Workout);