import axios from "axios";

export const fetchExercises = (formData) => {
    return axios.get("api/exercises", formData);
};