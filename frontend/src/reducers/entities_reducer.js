import { combineReducers } from "redux";
import locations from "./locations_reducer";
import exercises from './exercises_reducer';

export default combineReducers({
  locations,
  exercises
});

//Need to add this to the Root Reducer
