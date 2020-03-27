import { fetchExercises } from "../../actions/exercises_action";
import { connect } from 'react-redux';
import CustomWorkoutForm from './custom_workout_form';

const mSTP = state => ({
	exercises: state.entities.exercises
})

const mDTP = dispatch => ({
	fetchExercises: (formData) => dispatch(fetchExercises(formData))
});

export default connect(mSTP, mDTP)(CustomWorkoutForm);