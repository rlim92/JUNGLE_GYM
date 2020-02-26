import {
  RECEIVE_ALL_LOCATIONS
} from "../actions/location_actions";

// HOW DARE U!!!
export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_LOCATIONS:
      return action.locations.data
    default:
      return state;
  }
}
