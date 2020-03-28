import { fetchPersonalExercises } from "../../actions/personal_exercises_action";
import { connect } from 'react-redux';
import CustomWorkoutForm from './custom_workout_form';

const mSTP = state => {
	// debugger;
	return {
		personalExercises: Object.values(state.entities.exercises)
		// personalExercises: state.entities.exercises
	}
}


const mDTP = dispatch => ({
	fetchPersonalExercises: (formData) => dispatch(fetchPersonalExercises(formData))
});

export default connect(mSTP, mDTP)(CustomWorkoutForm);