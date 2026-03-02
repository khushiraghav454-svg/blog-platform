import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>❌ 404</h1>
      <h2>Oops! Page not found.</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "#2f5d50", textDecoration: "underline" }}>
        🏠 Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;