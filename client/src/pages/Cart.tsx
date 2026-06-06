import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '40px', minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: '#8f3333', marginBottom: '30px' }}>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p style={{ color: 'gray', fontSize: '18px' }}>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item: any) => (
            <div key={item._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#eee6ca', padding: '20px', borderRadius: '12px', marginBottom: '16px' }}>
              <img src={item.image} alt={item.name} style={{ width: '120px', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />

              <div style={{ marginLeft: '16px' }}>
                <h3 style={{ color: '#8f3333', margin: 0 }}>{item.name}</h3>
                <p style={{ color: 'gray', margin: '4px 0' }}>${item.price.toFixed(2)} each</p>
                <p style={{ color: 'gray', margin: 0 }}>Qty: {item.quantity}</p>
              </div>

              <p style={{ fontWeight: 'bold', color: '#8f3333' }}>${(item.price * item.quantity).toFixed(2)}</p>

              <button onClick={() => removeFromCart(item._id)} style={{ backgroundColor: 'transparent', border: 'none', color: '#8f3333', cursor: 'pointer', fontSize: '20px' }}>✕</button>
            </div>
          ))}

          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <h2 style={{ color: '#8f3333' }}>Total: ${total.toFixed(2)}</h2>
            <button style={{ padding: '12px 30px', backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
