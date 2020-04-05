import { RECEIVE_PERSONAL_EXERCISES } from "../actions/personal_exercises_action";

export default function(state = {}, action) {
	Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PERSONAL_EXERCISES:
      return action.customExercises.data;
    default:
      return state;
  }
}
