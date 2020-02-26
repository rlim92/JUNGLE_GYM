import React from "react";
import NavBarContainer from "../nav/navbar_container";


class Workout extends React.Component {
  
  render(){
    return (
      <div>
        <p>You're logged in!</p>
        <NavBarContainer/>
      </div>
    )
  }
}

export default Workout;