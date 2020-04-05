import {
    RECEIVE_SOME_EXERCISES
} from "../actions/exercises_action";

import { RECEIVE_PERSONAL_EXERCISES } from "../actions/personal_exercises_action";


export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_SOME_EXERCISES:
            return action.exercises.data
        case RECEIVE_PERSONAL_EXERCISES:
            return action.customExercises.data;
        default:
            return state;
    }
}
