import { fetchPersonalExercises } from "../../actions/exercises_action";
import { fetchCustomExercises } from "../../actions/personal_exercises_action";
import { connect } from 'react-redux';
import CustomWorkoutForm from './custom_workout_form';

const mSTP = state => {

	return {
		personalExercises: Object.values(state.entities.exercises),
		customWorkout: []
	}
}


const mDTP = dispatch => ({
	fetchPersonalExercises: () => dispatch(fetchPersonalExercises()),
	fetchCustomExercises: formData => dispatch(fetchCustomExercises(formData))
});

export default connect(mSTP, mDTP)(CustomWorkoutForm);