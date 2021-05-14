import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import cartIcon from "../../assets/cart-icon.png";
import "./cart-icon.styles.css";

const CartIcon = (props) => {
  return (
    <div className="cart-container">
      <img src={cartIcon} alt="cart-icon" />
      <span className="cart-count">{props.cart.length}</span>
    </div>
  );
};

export default CartIcon;
