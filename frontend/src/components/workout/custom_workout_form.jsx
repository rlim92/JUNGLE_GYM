import React from 'react';
import { Link } from 'react-router-dom';
import customWorkoutCSS from "./_custom_workout.css";
import NavBar from '../nav/navbar';
import Footer from '../footer/footer';

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
				<li className="personalExercises" >
					<div className="checkbox-container" key={exer.name}>  
							<input
							checked={check}
							type="checkbox"
							id={exer.name}
							className="customCheckbox"
							value={exer.name}
							onChange={this.update}
							/>
						<div>{exer.name}</div>
					</div>
      </li>
		);
		})

		return (

      <div className="customWorkoutForm">
				<NavBar/> 
        <div className="formWrapper">
          <form className="exer-form" onSubmit={this.handleSubmit}>
            <div className="personalExercises">
              <h3 className="exerciseTitle">Exercises</h3>
              <div className="peCheckbox">
                <div className="peWrapper">
                  <div className="peInput">
                    <ul className="exer-ul">
                      {personalExercise.splice(0,15)}
                    </ul>
                  </div>
									<div className="peInput">
										<ul className="exer-ul">
											{personalExercise.splice(0, 15)}
										</ul>
									</div>
                </div>
              </div>
            </div>
						<button className="customWorkoutBtn">Submit</button>
          </form>	
					<div className="selected-exercises">
						{this.state.customWorkout}
					</div>
        </div>
				<Footer/>
      </div>
			
    );
	}
}

export default CustomWorkoutForm;

