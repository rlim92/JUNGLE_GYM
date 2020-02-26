import { connect } from "react-redux";
import Workout from "./workout";
import { fetchLocations } from '../../actions/location_actions';

const mSTP = (state, ownProps) => {
  return {
    locations: state.entities.locations
  };
};

const mDTP = dispatch => {
  return {
      fetchLocations: () => dispatch(fetchLocations())
  };
};

export default connect(mSTP, mDTP)(Workout);