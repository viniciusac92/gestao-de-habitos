import axios from "axios";
const token = JSON.parse(localStorage.getItem("token"));

const api = axios.create({
  baseURL: "https://kabit-api.herokuapp.com",
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE1NjQ4ODU0LCJqdGkiOiI1ZDVjMTA3NDc5MTQ0ZTdmOWJiZTBiNjg0YTRkZWIxMSIsInVzZXJfaWQiOjV9.srGTXtSMX1WyVZ-gGRhvQA07oIxLE2nKPzLzIS9IFnA`,
  },
});

export default api;
