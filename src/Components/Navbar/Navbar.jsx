import React from 'react';
import navImg from "../../assets/images.jpg"
const Navbar = () => {
  return (
  <nav className='nav-container'>
      <div className='nav-left'>
        <img src={navImg} alt="" />
        <p>Meal Hub</p>
      </div>
      <div className='nav-right'>
        <p>Home</p>
        <p>About Us</p>
        <p>Foods Item</p>
        <p>Contact Us</p>
        <p>Orders</p>
      </div>
    </nav>
  );
};

export default Navbar;