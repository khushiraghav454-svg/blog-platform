import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:5000/api/auth/register", { name, email, password })
      .then((res) => {
        console.log("Registered user:", res.data.user);
        setMessage("✅ Registered successfully! You can now login.");
        setName("");
        setEmail("");
        setPassword("");
        // Redirect to login after a short delay
        setTimeout(() => navigate("/login"), 1500);
      })
      .catch((err) => {
        console.error(err.response || err);
        const errMsg = err.response?.data?.message || "❌ Registration failed. Check backend.";
        setMessage(errMsg);
      });
  };

  return (
    <div className="form">
      <h2>Register</h2>

      {message && (
        <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>
      )}

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;