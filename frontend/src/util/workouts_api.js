import axios from "axios";


export const fetchWorkout = () => {
    return axios.get("api/workout");
};