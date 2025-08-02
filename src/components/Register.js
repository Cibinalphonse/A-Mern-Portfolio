import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Registration successful!");
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (err) {
      alert("❌ Registration failed");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister} style={{ maxWidth: "300px", margin: "auto" }}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Register</button>
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
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  cursor: "pointer"
};

export default Register;
