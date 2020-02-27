import React from "react";
import NavBarContainer from "../nav/navbar_container";
// import { fetchExercises }  from "../../actions/exercises_action";


class Workout extends React.Component {
  constructor(props) {
    super(props)
    const intensity = "1"
    this.state = { 
      intensity,
      category: "Core"
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    // debugger;
    console.log(this.state)
    return e => this.setState({ [field]: e.currentTarget.value })
    
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    this.props.fetchExercises(this.state)
      .then(
        this.props.history.push('/workout')
      )

  }

  render(){
    return (
      <div>
        <p>You're logged in!</p>
        <NavBarContainer />
        <div className="workoutContainer">
          <div className="workoutFormWrapper">
            <form className="workoutForm" onSubmit={this.handleSubmit}>
              <div className="categoryDropdown">
                <label>
                  Choose a category
                  <select onChange={this.update("category")} className="workoutList">
                    <option value="Core" >
                      Core
                    </option>
                    <option
                      value="Upper Body"
                      
                    >
                      Upper Body
                    </option>
                    <option
                      value="Lower Body"
                      
                    >
                      Lower Body
                    </option>
                    <option value="Cardio" >
                      Cardio
                    </option>
                  </select>
                </label>
              </div>
              <div className="intensitySlider">
                <div className="sliderInput">
                  <label>
                    Choose intensity
                    <input
                      type="range"
                      min="1"
                      max="3"
                      value={this.state.intensity}
                      className="slider"
                      id="myRange"
                      onChange={this.update("intensity")}
                    />
                  </label>
                </div>
              </div>
              <button className="workoutFormButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Workout;