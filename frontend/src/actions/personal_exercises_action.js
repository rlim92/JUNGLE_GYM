import * as ApiUtil from "../util/personal_exercises_api";

export const RECEIVE_PERSONAL_EXERCISES = "RECEIVE_PERSONAL_EXERCISES";

const receiveCustomExercises = customExercises => ({
  type: RECEIVE_PERSONAL_EXERCISES,
  customExercises
});

export const fetchCustomExercises = formData => dispatch => {
  return ApiUtil.fetchCustomExercises(formData).then(customExercises => {
    return dispatch(receiveCustomExercises(customExercises));
  });
};
