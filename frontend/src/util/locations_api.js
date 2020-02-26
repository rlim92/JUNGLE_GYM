import axios from "axios";


export const fetchLocations = () => {
  return axios.get("api/locations");
};