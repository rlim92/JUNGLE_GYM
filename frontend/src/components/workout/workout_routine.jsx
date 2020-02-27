import React from "react";

class WorkoutRoutine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let workout = <></>
        if (this.props.exercises) {
            const exercises = Object.values(this.props.exercises);
            workout = exercises.map( exer => {
                let repsOrSecs = '';
                let value;
                if (exer.reps) {
                    repsOrSecs = " Reps"
                    value = exer.reps;
                } else {
                    repsOrSecs = " Seconds"
                    value = exer.seconds;
                }
                return (<li>
                    <h6 className="exercise-name">{exer.name}</h6>
                    <p className="exercise-description">{exer.description}</p>
                    <p className="exercise-value">{`${value} ${repsOrSecs} `}</p>
                </li>)
            })
        }

        return (
            <div className="workout-list-container">
               <h3 className="workout-title">Workout</h3> 
               <ul className="workouts-ul">
                   {workout}
               </ul>
            </div>
        )
    }
}

export default WorkoutRoutine;