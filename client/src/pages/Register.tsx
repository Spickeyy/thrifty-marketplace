import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
const navigate = useNavigate();
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [profileImage, setProfileImage] = useState<File | null>(null);

const handleSubmit = async () => {
  const nameRegex = /^[A-Z][a-z]+$/;
  if (!nameRegex.test(firstName)) return alert('First name must start with a capital letter, rest lowercase. Example: John');
  if (!nameRegex.test(lastName)) return alert('Last name must start with a capital letter, rest lowercase. Example: Doe');

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) return alert('Password must be at least 8 characters, contain 1 capital letter and 1 number.');

  if (password !== confirmPassword) return alert('Passwords do not match!');

  const formData = new FormData();
  formData.append('name', `${firstName} ${lastName}`);
  formData.append('email', email);
  formData.append('password', password);
  if (profileImage) formData.append('profileImage', profileImage);

  const res = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    body: formData,
  });
  const data = await res.json();
  alert(data.message);
  navigate('/login');
};
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#8f3333' }}>
      <div style={{ backgroundColor: '#eee6ca', padding: '40px', borderRadius: '12px', width: '350px', textAlign: 'center' }}>
        
        <h2 style={{ color: '#8f3333', marginBottom: '24px' }}>Register</h2>

        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)} 
          type="text" 
          placeholder="First Name" 
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }} 
        />
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }}
/>
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
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }} 
        />

        <input
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          type="password" 
          placeholder="Confirm Password" 
          style={{ width: '100%', padding: '10px', marginBottom: '24px', borderRadius: '8px', border: '1px solid #8f3333', outline: 'none', boxSizing: 'border-box' }} 
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <input
          type="file"
          accept="image/*"
          onChange={e => setProfileImage(e.target.files?.[0] || null)}
          style={{ flex: 1 }}
          />
          {profileImage && (
        <img
          src={URL.createObjectURL(profileImage)}
          alt="preview"
          style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #8f3333' }}
          />
          )}
        </div>

        <button onClick={() => handleSubmit()} style={{ width: '100%', padding: '12px', backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
          Register!
        </button>

        <p style={{ marginTop: '16px', color: 'black' }}>Already have an account? <a href="/login" style={{ color: '#8f3333' }}>Login</a></p>

      </div>
    </div>
  );
}

export default Register;