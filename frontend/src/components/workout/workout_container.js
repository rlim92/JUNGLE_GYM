import { connect } from "react-redux";
import Workout from "./workout";

const mSTP = (state, ownProps) => {
  return {
    // locations: state.entities.locations
  };
};

const mDTP = dispatch => {
  return {
      fetchLocations: () => console.log("test")
  };
};

export default connect(mSTP, mDTP)(Workout);