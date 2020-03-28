import React from 'react';
import { Link } from 'react-router-dom';
import customWorkoutCSS from "./_custom_workout.css";

class CustomWorkoutForm extends React.Component {
	constructor(props) {
		super(props)
		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault()

		this.props.fetchPersonalExercises(this.props.personalExercises)
			.then(this.props.history.push('/workout'))
	}

	update(field) {
		return e => this.setState({ [field]: e.currentTarget.value })
	}

	render() {
		let exercises = this.props.personalExercises ? this.props.personalExercises : [];
		let personalExercise = [];
		exercises.map(exer => {
			personalExercise.push(
      <li>
        <input
          type="checkbox"
          id="peExercise"
          className="customCheckbox"
          value={exer.name}
          onChange={this.update("exercise")}
        />
      </li>
		);
		})
		return (
      <div className="customWorkoutForm">
        <div className="formWrapper">
          <form onSubmit={this.handleSubmit}>
            <div className="personalExercises">
              <h3 className="exerciseTitle">Exercises</h3>
              <div className="peCheckbox">
                <div className="peWrapper">
                  <div className="peInput">
                    <ul>
                      {personalExercise}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
	}
}

export default CustomWorkoutForm;
	// <div className="customWorkoutForm">
	//   <div className="formWrapper">
	//     <form onSubmit={this.handleSubmit}>
	//       <div className="categories">
	//         <h3 className="categoryTitle">Exercises</h3>
	//         <div className="categoryCheckbox">
	//           <div className="checkboxInput">
	// 						<div className="categoryWrapper">
	// 							<input
	// 								type="checkbox"
	// 								className="customCheckbox"
	// 								id="upperBody"
	// 								value={this.state.category}
	// 								onChange={this.update("category")}
	// 							/>
	// 							<label for="upperBody" className="upperLabel">Upper Body</label>
	// 						</div>
	// 						<input
	// 							type="checkbox"
	// 							className="customCheckbox"
	// 							id="lowerBody"
	// 							value={this.state.category}
	// 							onChange={this.update("category")}
	// 						/>
	// 						<label for="lowerBody" className="lowerLabel">Lower Body</label>
	// 						<input
	// 							type="checkbox"
	// 							className="customCheckbox"
	// 							id="core"
	// 							value={this.state.category}
	// 							onChange={this.update("category")}
	// 						/>
	// 						<label for="core" className="coreLabel">Core</label>
	//           </div>
	//         </div>
	//       </div>
	//       <div className="exercises">
	//         <div className="exerciseCheckbox">
	//           <div className="checkboxInput">
	//               <input
	//                 type="checkbox"
	//                 className="customCheckbox"
	//                 id="exercises"
	//                 value={this.props.exercises[0]}
	//                 onChange={this.update("exercises")}
	//               />
	// 						<label for="exercises">Exercises</label>
	//           </div>
	//         </div>
	//       </div>
	//       <button className="createWorkout">Create</button>
	//     </form>
	//   </div>
	// </div>

