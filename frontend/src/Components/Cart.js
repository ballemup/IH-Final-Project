import React, { useState, useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
  let total = 0;

  let removeItems = (item) => {
    let cart = { ...props.cart };
    delete cart[item.id];
    props.setCart(cart);
  };

  let handleChange = (item) => (e) => {
    console.log(item, e.target.value);
    let cart = { ...props.cart };
    // setting e.target.value to the quantity of the cart item
    cart[item.id].quantity = Number(e.target.value);
    props.setCart(cart);
  };

  let displayAllProducts = () => {
    let products = [];
    for (let key in props.cart) {
      let item = props.cart[key];
      total += item.price * item.quantity;
      products.push(
        <div key={key}>
          <img style={{ width: "30px" }} src={item.image} />
          <div>
            <b>{item.name}</b>
          </div>
          <div>${item.price}</div>
          <button onClick={() => removeItems(item)}>Remove</button>
          <div>
            <input
              onChange={handleChange(item)}
              className="input"
              type="number"
              defaultValue="1"
            />
          </div>
          Subtotal:
          {item.price * item.quantity}
        </div>
      );
    }
    products.unshift(<h2>{total}</h2>);
    return <div>{products}</div>;
  };

  let showTotalPrice = () => {
    if (props.cart.length > 0) {
      return "Total:  $" + props.subtotal?.toFixed(2);
    } else {
      return "Total:  $0";
    }
  };

  return (
    <div className="cart_container">
      <div className="checkout_btn">
        <Link to="/Checkout">
          <button>Checkout</button>
        </Link>
        <div>{total}</div>
      </div>
      <div>{displayAllProducts()}</div>;
    </div>
  );
};

export default Cart;
