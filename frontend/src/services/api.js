import axios from "axios";

// Axios instance with backend URL
export const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend
  headers: { "Content-Type": "application/json" },
});

// Attach JWT token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Optional: global 401 handler
API.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized! Token may be missing or invalid.");
    }
    return Promise.reject(error);
  }
);