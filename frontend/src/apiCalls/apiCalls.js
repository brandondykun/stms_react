import axios from "axios";

const BASE_URL = "http://localhost:8000/";

const apiCalls = {};

apiCalls.login = (data) => {
  return axios.post(`${BASE_URL}api/token/`, data);
};

apiCalls.registerUser = (data) => {
  return axios.post(`${BASE_URL}users/`, data);
};

export default apiCalls;
