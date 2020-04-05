import React from "react";
import NavBarContainer from "../nav/navbar_container";
import Footer from "../footer/footer";
import workoutCSS from "./_workout.css"
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
    this.handleSubmitTwo = this.handleSubmitTwo.bind(this);
  }

  update(field) {
    // debugger;
    // console.log(this.state)
    return e => this.setState({ [field]: e.currentTarget.value })
    
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger;
    this.props.fetchExercises(this.state)
      .then( () => this.props.history.push('/workout') )
  }

  handleSubmitTwo(e) {
    e.preventDefault();
    // this.props.fetchPersonalExercises()
    //   .then(
    this.props.history.push('/personal')
      // )
  }

  render(){
    let intensityLevel = "";
    switch(this.state.intensity){
      case "1":
        intensityLevel = "Beginner";
        break;
      case "2":
        intensityLevel = "Intermediate";
        break;
      case "3":
        intensityLevel = "Master";
        break;
      default:
        intensityLevel = "Broken";
        break;
    }
    return (
        <div className="workoutContainer">
          <div className="navContainer">
            <NavBarContainer />
          </div>
          <div className="bestDiv">
            <div></div>
            <div className="workoutFormWrapper">
              <form className="workoutForm" onSubmit={this.handleSubmit}>
                <div className="categoryDropdown">
                <div className="intensitySlider">
                  <div className="sliderInput">
                    <label>
                      Intensity: {intensityLevel}
                      <br />
                      <input
                        type="range"
                        min="1"
                        max="3"
                        value={this.state.intensity}
                        className="slider"
                        id="myRange"
                        onChange={this.update("intensity")}
                        style={{width: "90%"}}
                      />
                    </label>
                  </div>
                  <label className="Dropdown">
                    <select onChange={this.update("category")} className="workoutList">
                      <option className="dropdownText" default hidden>-----Choose a category-----</option>
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
                </div>
                <div className="custom-workout">
                  <span>or</span>
                  <button onClick={this.handleSubmitTwo} 
                          className="custom-workout-button">
                          Custom Workout
                  </button>
                </div>
                <button className="workoutFormButton">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default Workout;