import axios from "axios";

const BASE_URL = "http://localhost:8000/";

const apiCalls = {};

apiCalls.login = (data) => {
  return axios.post(`${BASE_URL}api/token/`, data);
};

export default apiCalls;
