import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setCurrentUser }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const API_URL = "https://cross-851e1-default-rtdb.firebaseio.com/users.json";

  const show = (msg) => setMessage(msg);

  const handleSignup = async () => {
    if (password !== confirmPass) {
      show("Passwords don't match");
      return;
    }

    try {
      const { data } = await axios.get(API_URL);
      const users = data || {};
      const exists = Object.values(users).some((user) => user.email === email);

      if (exists) {
        show("User already exists. Please login.");
        return;
      }

      const newUser = { name, email, password };
      await axios.post(API_URL, newUser);

      localStorage.setItem("currentUser", JSON.stringify(newUser));
      setCurrentUser(newUser);
      show("Signup successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      show("Signup failed");
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.get(API_URL);
      const users = Object.values(data || {});
      const user = users.find((u) => u.email === email && u.password === password);

      if (!user) return show("Invalid credentials");

      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);
      show("Login successful!");
      navigate("/");
    } catch (err) {
      console.error(err);
      show("Login failed");
    }
  };

  const containerStyle = {
    display: "flex",
    width: "800px",
    height: "500px",
    background: "white",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
    margin: "50px auto",
    fontFamily: "'Segoe UI', sans-serif"
  };

  const panelStyle = {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  };

  const leftPanelStyle = {
    ...panelStyle,
    backgroundColor: "teal",
    color: "white"
  };

  const rightPanelStyle = {
    ...panelStyle
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "12px",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px"
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "rgb(8, 55, 55)",
    color: "white",
    border: "none",
    borderRadius: "6px",
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "16px"
  };

  const messageStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontWeight: "bold",
    color: "#555"
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={leftPanelStyle}>
          <h2 style={{ color: "rgb(8, 55, 55)", fontSize: "32px", fontWeight: "bold", fontFamily: "Segoe UI, sans-serif"}}>Welcome Back!</h2>
          <p>Login with your personal info</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleLogin} style={buttonStyle}>
            Sign In
          </button>
        </div>

        <div style={rightPanelStyle}>
        <h1 style={{ color: "rgb(8, 55, 55)", fontSize: "32px", fontWeight: "bold", fontFamily: "Segoe UI, sans-serif" }}>
  Create Account
</h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleSignup} style={{   padding: "12px",
                                                    backgroundColor: "teal",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "6px",
                                                    marginTop: "10px",
                                                    cursor: "pointer",
                                                    fontSize: "16px"}}>  Sign Up
          </button>
      
        </div>
      </div>
      <p style={messageStyle}>{message}</p>
    </>
  );
};

export default Login;



