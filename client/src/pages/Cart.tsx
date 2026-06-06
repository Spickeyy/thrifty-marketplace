import React from 'react';

function Cart() {
  return (
    <div style={{ padding: '40px', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: '#8f3333', marginBottom: '30px' }}>Your Cart</h1>

      {/* Cart Item */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#eee6ca', padding: '20px', borderRadius: '12px', marginBottom: '16px' }}>
        
        <div>
          <h3 style={{ color: '#8f3333', margin: 0 }}>Product Name</h3>
          <p style={{ color: 'gray', margin: '4px 0' }}>$10.00</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button style={{ backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 10px', cursor: 'pointer', fontSize: '16px' }}>-</button>
          <span>1</span>
          <button style={{ backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 10px', cursor: 'pointer', fontSize: '16px' }}>+</button>
        </div>

        <p style={{ fontWeight: 'bold', color: '#8f3333' }}>$10.00</p>

        <button style={{ backgroundColor: 'transparent', border: 'none', color: '#8f3333', cursor: 'pointer', fontSize: '16px' }}>✕</button>
      </div>

      {/* Total */}
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <h2 style={{ color: '#8f3333' }}>Total: $10.00</h2>
        <button style={{ padding: '12px 30px', backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
          Checkout
        </button>
      </div>

    </div>
  );
}

export default Cart;