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

apiCalls.getAllComments = () => {
  return axios.get(`${BASE_URL}comments/`);
};

apiCalls.addComment = (data) => {
  return axios.post(`${BASE_URL}comments/`, data);
};

apiCalls.getUserById = (id) => {
  return axios.get(`${BASE_URL}users/${id}`);
};

apiCalls.updateSoldierInfo = (id, data) => {
  return axios.patch(`${BASE_URL}soldiers/${id}`, data);
};

export default apiCalls;
