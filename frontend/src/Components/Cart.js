import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  let [cart, setCart] = useState([]); //Holds all products from API

  // Imports our Wishlist API from online
  useEffect(() => {
    axios.get(`./Cart`).then((res) => {
      setCart(res.js);
    });
  }, []);

  //Removes single product from Wishlist
  let removeProduct = (item) => {
    axios.delete(`./Cart/${item._id}`).then(() => refreshPage());
  };

  //Reloads the page
  function refreshPage() {
    axios.get(`./Cart`).then((res) => {
      setCart(res.js);
    });
  }

  let displayAllProducts = () => {
    return cart.map((item, i) => {
      return (
        <div key={i}>
          <img src={item.product.image} />
          <div>
            <b>{item.product.name}</b>
          </div>
          <div>${item.product.price}</div>
          <button onClick={() => removeProduct(item)}>Remove</button>
        </div>
      );
    });
  };

  return <div>{displayAllProducts()}</div>;
};

export default Cart;
