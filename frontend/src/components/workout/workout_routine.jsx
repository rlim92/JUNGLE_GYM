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
                let value1;
                let value2;
                let minute;
                if (exer.reps) {
                    repsOrSecs = " Reps"
                    minute = ""
                    value1 = exer.reps;
                    value2 = ""
                } else {
                    if (exer.seconds < 60){
                        repsOrSecs = " Seconds"
                        minute = ""
                        value1 = exer.seconds;
                        value2 = ""
                    } else {
                        value1 = exer.seconds % 60
                        value2 = Math.floor(exer.seconds / 60)
                        
                        if (value1 === 0){
                            repsOrSecs = ""
                            value1 = ""
                        } else {
                            repsOrSecs = " seconds"
                        }
                        
                        if (value2 > 1){
                            minute = " Minutes"
                        } else {
                            minute = " Minute"
                        }
                    }

                }
                return (<li>
                    <h6 className="exercise-name">{exer.name}</h6>
                    <p className="exercise-description">{exer.description}</p>
                    <p className="exercise-value">{`${value2} ${minute} ${value1} ${repsOrSecs}`}</p>
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