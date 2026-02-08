import axios from "axios";

// baseURL: "http://localhost:3000/api/v1",
const api = axios.create({
  baseURL: "https://bebd-backend.vercel.app/api/v1",
  withCredentials: true,
});

export default api;
