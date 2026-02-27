import { useState, useContext } from "react";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // State to store email and password
  const [form, setForm] = useState({ email: "khushi223@gmail.com", password: "12345446" });

  // Get setUser from AuthContext to save logged-in user info
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // Function to handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.email || !form.password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      // Call the login service with email and password
      const res = await loginUser(form);

      // Check if response has token
      if (!res.token) {
        console.warn("No token received from backend");
        alert("Login failed. No token returned from server.");
        return;
      }

      // Save user info in context
      setUser(res.user);

      // Save JWT token in localStorage for API requests
      localStorage.setItem("token", res.token);
      console.log("Token saved:", res.token);

      alert("Logged in successfully");

      // Redirect to home page
      navigate("/");
    } catch (err) {
      console.error("Login error:", err.response || err);
      alert(
        "Login failed. Make sure your email and password match the backend user."
      );
    }
  };

  return (
    <div className="container">
      {/* Login Form */}
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {/* Email Input */}
        <input
          placeholder="Enter your email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* Password Input */}
        <input
          placeholder="Enter your password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;