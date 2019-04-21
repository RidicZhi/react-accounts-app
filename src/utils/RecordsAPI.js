import axios from "axios";

const api =
  process.env.REACT_APP_RECORDS_API_URL ||
  "https://5cb5bfa207f233001424d6c5.mockapi.io/api/v1/records";

export const getRecords = () => 
  axios.get(`${api}/api/v1/records`);

export const createRecord = (body) => 
  axios.post(`${api}/api/v1/records`, body);

export const updateRecord = (id, body) => 
  axios.put(`${api}/api/v1/records/${id}`, body);

export const deleteRecord = (id) => 
  axios.delete(`${api}/api/v1/records/${id}`);