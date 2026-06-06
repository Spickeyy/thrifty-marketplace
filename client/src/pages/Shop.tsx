import React, { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from '../context/CartContext';

function Shop() {
  const { addToCart, cartItems } = useCart();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleAddToCart = (product: any) => {
    const alreadyInCart = cartItems.some((item: any) => item._id === product._id);
    if (alreadyInCart) {
      setAlertMessage('You already have this item in your cart!');
      setTimeout(() => setAlertMessage(null), 3000);
    } else {
      addToCart(product);
    }
  };
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const filtered = category === 'All' 
    ? products 
    : products.filter((p: any) => p.category === category);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {alertMessage && (
        <div style={{ backgroundColor: '#8f3333', color: 'white', padding: '12px 20px', borderRadius: '8px', marginBottom: '16px', fontWeight: 'bold', textAlign: 'center' }}>
          {alertMessage}
        </div>
      )}
      <h1 style={{ color: '#8f3333', marginBottom: '20px' }}>Shop</h1>

      {/* Category Buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
        {['All', 'Men', 'Women', 'Accessories'].map(cat => (
          <button
            key={cat}
            className="category-btn"
            onClick={() => setCategory(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: category === cat ? '#8f3333' : '#eee6ca',
              color: category === cat ? 'white' : '#8f3333',
              fontWeight: 'bold'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {paginated.map((product: any) => (
          <div key={product._id} className="product-card" style={{ backgroundColor: '#eee6ca', borderRadius: '12px', overflow: 'hidden' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            <div style={{ padding: '12px' }}>
              <h3 style={{ color: '#8f3333', margin: '0 0 8px 0' }}>{product.name}</h3>
              <p style={{ color: '#8f3333', fontWeight: 'bold' }}>${product.price}</p>
              <button onClick={() => handleAddToCart(product)} style={{ width: '100%', padding: '10px', backgroundColor: '#8f3333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <FaCartShopping size={16} /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i + 1}
      onClick={() => setCurrentPage(i + 1)}
      style={{
        padding: '8px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: currentPage === i + 1 ? '#8f3333' : '#eee6ca',
        color: currentPage === i + 1 ? 'white' : '#8f3333',
        fontWeight: 'bold'
      }}
    >
      {i + 1}
    </button>
  ))}
</div>
    </div>
  );
}

export default Shop;