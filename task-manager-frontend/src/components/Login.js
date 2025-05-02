import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });

      const { access, refresh } = response.data;

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      if (onLogin) onLogin();

      navigate("/dashboard"); // ✅ Redirect after successful login

    } catch (err) {
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail); // ✅ Show real backend error
      } else {
        setError("Login failed. Please check credentials.");
      }
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
