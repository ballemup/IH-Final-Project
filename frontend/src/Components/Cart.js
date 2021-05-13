import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = (props) => {
  console.log(props);

  let removeItems = (item) => {
    let cart = [...props.cart];
    let filteredCart = cart.filter((eachItem) => eachItem.id !== item.id);
    props.setCart(filteredCart);
  };

  let displayAllProducts = () => {
    if (!props.cart) {
      return <div>Empty cart</div>;
    }
    return props.cart.map((item, i) => {
      return (
        <div key={i}>
          <img style={{ width: "30px" }} src={item.image} />
          <div>
            <b>{item.name}</b>
          </div>
          <div>${item.price}</div>
          <button onClick={() => removeItems(item)}>Remove</button>
        </div>
      );
    });
  };
  return <div>{displayAllProducts()}</div>;
};

export default Cart;
