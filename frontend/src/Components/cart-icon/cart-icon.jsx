import React from "react";
import cartIcon from "../../assets/cart-icon.png";
import "./cart-icon.styles.css";

const CartIcon = () => {
  return (
    <div className="cart-container">
      <img src={cartIcon} alt="cart-icon" />
      <span className="cart-count">5</span>
    </div>
  );
};

export default CartIcon;
