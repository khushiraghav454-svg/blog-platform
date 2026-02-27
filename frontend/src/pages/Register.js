import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // Default values for testing
  const [form, setForm] = useState({ 
    name: "Khushi", 
    email: "khushi223@gmail.com", 
    password: "12345446" 
  });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      // Call backend to register
      const res = await registerUser(form);

      // Check backend response
      if (!res || !res.user) {
        alert("Registration failed: check backend response");
        return;
      }

      alert("Registered successfully! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err.response || err);

      // Show backend error message if available
      const message = err.response?.data?.message || "Registration failed";
      alert(message);
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={submit}>
        <h2>Register</h2>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;