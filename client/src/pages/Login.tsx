import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
  const res = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    window.location.href = '/';
  } else {
    alert(data.message || 'Login failed');
  }
};
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#8f3333' }}>
      <div style={{ backgroundColor: '#eee6ca', padding: '40px', borderRadius: '12px', width: '350px', textAlign: 'center' }}>
        
        <h2 style={{ color: '#8f3333', marginBottom: '50px' }}>LOGIN</h2>

        <input
          value={email}
          onChange={e => setEmail(e.target.value)} 
          type="email" 
          placeholder="Email" 
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }} 
        />

        <input 
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password" 
          placeholder="Password" 
          style={{ width: '100%', padding: '10px', marginBottom: '24px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }}
          onKeyDown={e => { if (e.key === 'Enter') handleLogin(); }} 
        />

        <button onClick={() => handleLogin()} style={{ width: '100%', padding: '12px', backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
          Enter
        </button>

        <p style={{ marginTop: '16px', color: 'black' }}>Don't have an account? <a href="/register" style={{ color: '#8f3333' }}>Register</a></p>

      </div>
    </div>
  );
}

export default Login;