import axios from "axios";

export const fetchCustomExercises = formData => {
  return axios.post("api/exercises", formData);
};
