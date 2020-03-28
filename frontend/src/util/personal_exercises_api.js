import axios from "axios";

export const fetchPersonalExercises = formData => {
  return axios.post("api/exercises", {category: "Upper Body"});
};
