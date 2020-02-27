import axios from "axios";

export const fetchExercises = (formData) => {
    return axios.post("api/exercises", formData);
};