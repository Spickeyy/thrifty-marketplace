import React from 'react';
import './App.css';
import logo from './logo.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import { useCart } from './context/CartContext';


function App() {
  const [user, setUser] = useState<any>(null);
    useEffect(() => {
      try { const stored = localStorage.getItem('user');
        if (stored) setUser(JSON.parse(stored));} catch (e) {
          localStorage.removeItem('user');}}, []);

  const { cartCount } = useCart();
  return (
  <BrowserRouter>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '6px', backgroundColor: '#eee6ca' }}>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
        <Link to="/shop" style={{ color: 'black', textDecoration: 'none' }}>Shop</Link>
        <Link to="/cart" style={{ color: 'black', textDecoration: 'none', position: 'relative', display: 'flex', alignItems: 'center' }}>
  <FaCartShopping size={20} />
  <span style={{ 
    backgroundColor: '#8f3333', 
    color: 'white', 
    borderRadius: '50%', 
    padding: '2px 6px', 
    fontSize: '12px',
    marginLeft: '4px'
  }}>
    {cartCount}
  </span>
      </Link>
        <a href="/thrifty" style={{ color: 'black', textDecoration: 'none' }}>THRIFTY</a>

        <Link to="/" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', lineHeight: 0, backgroundColor: 'transparent' }}>
            <img src={logo} alt="Mini Market Logo" style={{ height: '40px', display: 'block' }} />
        </Link>

      <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px', alignItems: 'center' }}>
        {user ? (
        <>
      <div
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        style={{ transition: 'transform 0.2s', cursor: 'pointer' }} >
      <img
        src={`http://localhost:5000/uploads/${user.profileImage}`}
        alt="avatar"
        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #8f3333', display: 'block' }} />
      </div>


      <span style={{ color: '#8f3333', fontWeight: 'bold' }}>{user.name}</span>

      <button
        onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('user'); window.location.href = '/'; }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        style={{ backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '14px', transition: 'opacity 0.2s' }}>
          Logout
          </button>
        </>
        ) : (
        <>
          <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
          <span>|</span>
          <Link to="/register" style={{ color: 'black', textDecoration: 'none' }}>Register</Link>
        </>
      )}
      </div>
      </nav>

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <footer style={{ backgroundColor: '#eee6ca', padding: '16px', textAlign: 'right', paddingRight: '30px' }}>
        <a href="/contacts" style={{ color: 'black', textDecoration: 'none', fontSize: '16px' }}>Contacts</a>
      </footer>
    </div>
  </BrowserRouter>
);
}

export default App;