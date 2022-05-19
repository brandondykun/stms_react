import axios from "axios";

const BASE_URL = "http://localhost:8000/";

const apiCalls = {};

apiCalls.login = (data) => {
  return axios.post(`${BASE_URL}api/token/`, data);
};

apiCalls.registerUser = (data) => {
  return axios.post(`${BASE_URL}users/`, data);
};

apiCalls.createAccount = (data) => {
  return axios.post(`${BASE_URL}soldiers/`, data);
};

apiCalls.getAllSoldiers = () => {
  return axios.get(`${BASE_URL}soldiers/`);
};

apiCalls.getSoldierById = (id) => {
  return axios.get(`${BASE_URL}soldiers/${id}`);
};

export default apiCalls;
