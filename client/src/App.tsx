import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';


function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
  <BrowserRouter>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '6px', backgroundColor: '#eee6ca' }}>
        <a href="/" style={{ color: 'black', textDecoration: 'none' }}>Home</a>
        <a href="/shop" style={{ color: 'black', textDecoration: 'none' }}>Shop</a>
        <a href="/cart" style={{ color: 'black', textDecoration: 'none', position: 'relative', display: 'flex', alignItems: 'center' }}>
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
</a>
        <a href="/thrifty" style={{ color: 'black', textDecoration: 'none' }}>THRIFTY</a>
        <img src={logo} alt="Mini Market Logo" style={{ height: '40px', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }} />
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Login</Link>
          <span style={{ color: 'black', textDecoration: 'none' }}>|</span>
          <Link to="/register" style={{ color: 'black', textDecoration: 'none' }}>Register</Link>
        </div>
      </nav>

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
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