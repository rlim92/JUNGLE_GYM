import React from "react";
import WorkoutRoutine from "./workout_routine_container";
import Map from "./maps";
import workoutCSS from './_workout.css';
import NavBar from '../nav/navbar_container';

class Workout extends React.Component {
  constructor(props) {
    super(props);
    // this.MarkerManager = undefined;
  }
  render() {
    // if (this.props.location && !this.MarkerManager) {
    //   this.MarkerManager = new MarkerManager(this.map, this.props.locations);
    // }
    return (
      <>
        <NavBar/>
        <div className="workout-container">
          <WorkoutRoutine />
          <div className="map-container">
            <Map fetchLocations={this.props.fetchLocations} locations={this.props.locations}/>
          </div>
        </div>
      </>
    )
  }
}

export default Workout;