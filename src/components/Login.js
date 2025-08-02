import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert(`✅ Logged in as: ${data.email}`);
      localStorage.setItem("token", data.token); // optional
    } else {
      alert(`❌ ${data.message}`);
    }
  } catch (error) {
    alert("❌ Server error");
    console.error(error);
  }
};

return (
    <div className="login-container" style={{ padding: "60px", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "inline-block", maxWidth: "300px", width: "100%" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  marginBottom: "10px",
  width: "100%",
  fontSize: "16px"
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#444",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

export default Login;
