import React from "react";

class WorkoutRoutine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { exercises } = this.props.exercises;
        const workout = Object.values(exercises).map( exer => {
            let repsOrSets = '';
            let value;
            if (exer.reps) {
                repsOrSets = "Reps:"
                value = exer.reps;
            } else {
                repsOrSets = "Sets:"
                value = exer.sets;
            }
            return (<li>
                <h6>exer.name</h6>
                <p>exer.description</p>
                <p>{`${repsOrSets}: ${value}`}</p>
            </li>)
        })

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