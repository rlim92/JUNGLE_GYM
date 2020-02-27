import * as ApiUtil from '../util/exercises_api';

export const RECEIVE_SOME_EXERCISES = "RECEIVE_SOME_EXERCISES";

const receiveExercises = (exercises) => ({
    type: RECEIVE_SOME_EXERCISES,
    exercises
});

export const fetchExercises = () => dispatch => {
    return ApiUtil.fetchExercises()
        .then(exercises => { return dispatch(receiveExercises(exercises)) })
};