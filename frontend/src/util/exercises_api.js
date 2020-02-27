import axios from "axios";


export const fetchExercises = () => {
    return axios.get("api/exercises");
};