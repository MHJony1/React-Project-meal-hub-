
import React, {useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import SingleFood from '../SingleFood/SingleFood';
import Cart from '../Cart/Cart';

const FoodSection = ({ foodDataRes }) => {
  // setfood price and set cart section
  const [foodsWithPrice, setFoodsWithPrice] = useState([]);
  const [cart, setCart] = useState([]);

  // useEffect use kora;:
  useEffect(() => {
    foodDataRes.then(data => {
      if (data.meals) {
        const mealsPrice = data.meals.map(meal => ({
          ...meal,
          // random price generate
          price: Math.floor(Math.random() * (500 - 100 + 1)) + 100 
        }));
        setFoodsWithPrice(mealsPrice);
      }
    });
  }, [foodDataRes]); 

  const handleAddToCart = (foodData) => {
    const isExist = cart.find(item => item.idMeal === foodData.idMeal);
  
    if (isExist) {
    const remaining = cart.map(item => 
      item.idMeal === foodData.idMeal 
      ? { ...item, quantity: item.quantity + 1 } 
      : item
    );
    setCart(remaining);
  } else {
    setCart([...cart, { ...foodData, quantity: 1 }]);
  }
  };

  const handleOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    setCart([]);
    toast.success("Your Order Completed!");
  };

  return (
    <div className='food-container-parent'>
      <div className='food-container-left'>
        
        {foodsWithPrice.map(item => (
          <SingleFood 
            key={item.idMeal} 
            food={item} 
            handleAddToCart={handleAddToCart} 
          />
        ))}
      </div>

      <div className='food-container-right'>
        <div className='cart-sticky'> {/* কার্টটি স্ক্রল করলে যেন আটকে থাকে তার জন্য একটি ক্লাস */}
          <h2>Your Cart</h2>
          <Cart cart={cart}></Cart>
          <button className='order-btn' onClick={handleOrder}>Order Now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FoodSection;