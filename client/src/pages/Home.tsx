import React from 'react';

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#f5f5f5' }}>
        <h1>Welcome to Thrifty</h1>
        <p>Find the best prices on your favourite clothes!</p>
        <a href="/shop">
          <button style={{ padding: '12px 30px', backgroundColor: '#8f3333', color: 'White', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
            Shop Now
          </button>
        </a>
      </div>

    </div>
  );
}

export default Home;