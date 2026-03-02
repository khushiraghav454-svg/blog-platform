import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from localStorage when component mounts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token"); 
    localStorage.removeItem("user");
    setUser(null); 
    navigate("/login"); 
  };

  if (!user) {
    return <h2 style={{ color: "red" }}>⚠️ Please login to view your profile.</h2>;
  }

  return (
    <div className="form">
      <h2>Profile Page</h2>
      <p><strong>Name:</strong> {user.username || user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;