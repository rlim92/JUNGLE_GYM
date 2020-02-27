import React from "react";
import NavBarContainer from "../nav/navbar_container";


class Workout extends React.Component {
  constructor(props) {
    super(props)
    const value = "1"
    this.state = { value }

    this.update = this.update.bind(this);
  }

  setValue(e) {
    this.setState({value: e})
  }

  update(field) {
    //return e => this.setState({ [field]: e.currentTarget.value })
    this.value.update(this.state)
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
                    <option value="1">Workout 1</option>
                    <option value="2">Workout 2</option>
                    <option value="3">Workout 3</option>
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
                    onChange={this.setValue.bind(this)}
                    onAfterChange={this.update.bind(this)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Workout;