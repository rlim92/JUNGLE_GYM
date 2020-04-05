import { combineReducers } from "redux";
import locations from "./locations_reducer";
import exercises from './exercises_reducer';
import customExercises from "./personal_exercises_reducer";

export default combineReducers({
  locations,
  exercises,
  customExercises
});

//Need to add this to the Root Reducer
