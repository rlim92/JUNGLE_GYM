import React from "react";
import NavBarContainer from "../nav/navbar_container";


class Workout extends React.Component {
  constructor(props) {
    super(props)
    const value = "1"
    this.state = { value }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
    
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render(){
    return (
      <div>
        <p>You're logged in!</p>
        <NavBarContainer/>
        <div className="workoutContainer">
          <div className="workoutFormWrapper">
            <form className="workoutForm">
              <div className="categoryDropdown">
                <label>Choose a category
                  <select className="workoutList">
                    <option value="1">Core</option>
                    <option value="2">Upper Body</option>
                    <option value="3">Lower Body</option>
                    <option value="3">Cardio</option>
                  </select>
                </label>
              </div>
              <div className="intensitySlider">
                <div className="sliderInput">
                  <input 
                    type="range"
                    min="1"
                    max="3"
                    value={this.state.value}
                    class="slider"
                    id="myRange"
                    onChange={this.update('value')}
                  />
                </div>
              </div>
              <button 
                onSubmit={this.handleSubmit}
                className="workoutFormButton">Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Workout;