// src/services/api.js
import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000/api", // ✅ matches backend

  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
