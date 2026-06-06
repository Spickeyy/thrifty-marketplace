import React, { useEffect } from 'react';

const EMOJIS = ['😀', '😂', '😍', '🤩', '😎', '🥳', '😜', '🤪', '😇', '🥰'];

function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      const emoji = document.createElement('div');
      emoji.innerText = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      emoji.style.position = 'fixed';
      emoji.style.top = '60px';
      emoji.style.left = `${Math.random() * 100}vw`;
      emoji.style.fontSize = '28px';
      emoji.style.opacity = '0.7';
      emoji.style.zIndex = '0';
      emoji.style.pointerEvents = 'none';
      emoji.style.animation = `fall ${3 + Math.random() * 4}s linear forwards`;
      document.body.appendChild(emoji);
      setTimeout(() => emoji.remove(), 7000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '80px 20px', position: 'relative', zIndex: 1 }}>
        <h1>Welcome to Thrifty</h1>
        <p>Find the best prices on your favourite clothes!</p>
        <a href="/shop">
          <button style={{ padding: '12px 30px', backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
            Shop Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
