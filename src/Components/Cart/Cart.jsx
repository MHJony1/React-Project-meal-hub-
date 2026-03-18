
import React from 'react';

const Cart = ({ cart }) => {
  // Total calculation-e quantity gun kora hoyeche
  const total = cart.reduce((prev, current) => prev + (current.price * current.quantity), 0);

  return (
    <div className="cart-details" style={{ padding: '10px' }}>
      <div style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        {cart.length === 0 ? (
          <p style={{ color: 'gray' }}>Your cart is empty.</p>
        ) : (
          cart.map((food, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '16px', marginBottom: '12px' }}>
              
              <span style={{ flex: '2', fontWeight: '600', textAlign: 'left' }}>
                 {food.strMeal}
              </span>
              
              <span style={{ flex: '1', textAlign: 'center', color: '#666' }}>
                × {food.quantity}
              </span>

              <span style={{ flex: '1', textAlign: 'right', fontWeight: '600', color: '#d35400' }}>
                   ${food.price * food.quantity}
              </span>
            </div>
          ))
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
        <h3 style={{ margin: 0 }}>Total:</h3>
        <h3 style={{ margin: 0, color: '#d35400' }}>${total}</h3>
      </div>
    </div>
  );
};

export default Cart;