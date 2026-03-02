import React, { useState, useEffect } from "react";

const Login = () => {
  const [message, setMessage] = useState("");

  // Pre-fill token and user info on page load
  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTE4MDIxY2E2NjY5MjQ2NGNjNjA5NyIsImlhdCI6MTc3MjQ3Mjc4MSwiZXhwIjoxNzcyNTU5MTgxfQ.b0DoVf460Vbalsy0dDw4cEy2YyzpJkk-Uqm6AWSLhcI";
    const user = {
      _id: "69a18021ca66692464cc6097",
      username: "khushiii",
      email: "khushi223@gmail.com",
    };

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setMessage("✅ Token and user info loaded! You can now create posts.");
  }, []);

  return (
    <div className="form">
      <h2>Login</h2>

      {message && (
        <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
          {message}
        </p>
      )}

      <p>
        You are automatically logged in with the saved token. You can now go to
        Create Post page.
      </p>
    </div>
  );
};

export default Login;