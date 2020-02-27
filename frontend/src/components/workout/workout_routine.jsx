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
                    <h6>{exer.name}</h6>
                    <p>{exer.description}</p>
                    <p>{`${value} ${repsOrSecs} `}</p>
                </li>)
            })
        }

        return (
            <div className="workout-container">
               <h3>Workout</h3> 
               <ul>
                   {workout}
               </ul>
            </div>
        )
    }
}

export default WorkoutRoutine;