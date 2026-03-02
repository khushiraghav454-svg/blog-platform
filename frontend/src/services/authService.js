import { API } from "./api";

// Login user
export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data; // expects { user, token }
};

// ✅ Register user
export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data); // make sure backend has this route
  return res.data; // expects { user, token }
};