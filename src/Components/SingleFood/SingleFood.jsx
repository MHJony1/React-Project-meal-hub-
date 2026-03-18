import React from 'react';
import './SingleFood.css';
const SingleFood = ({food, handleAddToCart}) => {
  // console.log(food);
  return (
    <div className='card'>
      <img src={food.strMealThumb} alt="" />
      <h3>Name: {food.strMeal}</h3>
      <p>Catagory: {food.strCategory}</p>
     <div className='price-set'>
       <p>Area: {food.strArea}</p>
       <p style={{color:'darkorange', fontWeight:"bold"}}> ${food.price} </p>
     </div>
      <button onClick={() => handleAddToCart(food)} className='btn'>Add to cart</button>
    </div>
  );
};

export default SingleFood;