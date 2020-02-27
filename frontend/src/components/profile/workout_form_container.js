import { connect } from "react-redux";
import WorkoutForm from "./workout_form";
import { fetchExercises } from '../../actions/exercises_action';

const mSTP = (state, ownProps) => {
    return {}
}


const mDTP = dispatch => {
    return {
        fetchExercises: (formData) => dispatch(fetchExercises(formData))
    };
};

export default connect(mSTP, mDTP)(WorkoutForm);