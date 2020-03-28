import * as ApiUtil from "../util/personal_exercises_api";

export const RECEIVE_PERSONAL_EXERCISES = "RECEIVE_PERSONAL_EXERCISES";

const receivePersonalExercises = personalExercises => ({
  type: RECEIVE_PERSONAL_EXERCISES,
  personalExercises
});

export const fetchPersonalExercises = formData => dispatch => {
  return ApiUtil.fetchPersonalExercises(formData).then(personalExercises => {
    return dispatch(receivePersonalExercises(personalExercises));
  });
};
