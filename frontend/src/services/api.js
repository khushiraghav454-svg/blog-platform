import axios from "axios";

// Your hardcoded token (the one you got from Postman)
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTE4MDIxY2E2NjY5MjQ2NGNjNjA5NyIsImlhdCI6MTc3MjQ3Mjc4MSwiZXhwIjoxNzcyNTU5MTgxfQ.b0DoVf460Vbalsy0dDw4cEy2YyzpJkk-Uqm6AWSLhcI";

// Axios instance with backend URL
export const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`, // attach token here directly
  },
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
