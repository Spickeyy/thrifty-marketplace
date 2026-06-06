import React from 'react';

function Register() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#8f3333' }}>
      <div style={{ backgroundColor: '#eee6ca', padding: '40px', borderRadius: '12px', width: '350px', textAlign: 'center' }}>
        
        <h2 style={{ color: '#8f3333', marginBottom: '24px' }}>Register</h2>

        <input 
          type="text" 
          placeholder="Full Name" 
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }} 
        />

        <input 
          type="email" 
          placeholder="Email" 
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }} 
        />

        <input 
          type="password" 
          placeholder="Password" 
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }} 
        />

        <input 
          type="password" 
          placeholder="Confirm Password" 
          style={{ width: '100%', padding: '10px', marginBottom: '24px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }} 
        />

        <button style={{ width: '100%', padding: '12px', backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
          Register!
        </button>

        <p style={{ marginTop: '16px', color: 'black' }}>Already have an account? <a href="/login" style={{ color: '#8f3333' }}>Login</a></p>

      </div>
    </div>
  );
}

export default Register;