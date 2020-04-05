import React from 'react';
import { Link } from 'react-router-dom';
import customWorkoutCSS from "./_custom_workout.css";
import Navbar from "../nav/navbar";
import NavBar from '../nav/navbar';

class CustomWorkoutForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			customWorkout: this.props.customWorkout
		}
		this.update = this.update.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.fetchPersonalExercises();
	}

	handleSubmit(e) {
		e.preventDefault()
		// debugger;
		this.props.fetchCustomExercises(this.state)
			.then(this.props.history.push('/workout'))
	}

	update(e) {
		let newWorkout = (this.state.customWorkout);
		if (e.target.checked) {
			newWorkout.push(e.target.value)
			
		} else {
			const index = newWorkout.indexOf(e.target.value);
			if (index > -1){
				newWorkout.splice(index, 1)
			}
		}
		this.setState({customWorkout: newWorkout})
		console.log(this.state.customWorkout)
	}

	render() {
		let exercises = this.props.personalExercises ? this.props.personalExercises : [];
		let personalExercise = [];
		exercises.map(exer => {
			let check = false;
			if (this.state.customWorkout.includes(exer.name)){
				check = true;
			}
			personalExercise.push(
				<li className="personalExercises" key={exer.name}>
					<div> 
							<input
							checked={check}
							type="checkbox"
							id={exer.name}
							className="customCheckbox"
							value={exer.name}
							onChange={this.update}
							/>
						{exer.name}
					</div>
      	</li>
		);
		})
		return (
      <div className="customWorkoutForm">
				<NavBar/> 
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
						<button className="customWorkoutBtn">Submit</button>
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

