import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <span style={{ fontWeight: "bold", fontSize: "18px" }}>Task Manager</span>
      <button onClick={handleLogout} style={{ float: "right" }}>Logout</button>
    </nav>
  );
}

export default Navbar;
