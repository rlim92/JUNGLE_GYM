import {
    RECEIVE_SOME_EXERCISES
} from "../actions/exercises_action";

export default function (state = {}, action) {
    switch (action.type) {
        case RECEIVE_SOME_EXERCISES:
            return action.exercises.data
        default:
            return state;
    }
}
