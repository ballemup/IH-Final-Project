import React, { useState, useEffect } from "react";
import "./cocktails.css";
import axios from "axios";
import actions from "../api";
import Cart from "./Cart";

function Cocktails(props) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    actions.getMargs().then((res) => {
      console.log(res);
      setDrinks(res.data.margaritas);
    });
  }, []);

  const addToCart = (data) => {
    props.setCart([...props.cart, data]);
    console.log("added to cart");
  };

  let displayAllProducts = () => {
    return drinks.map((item, i) => {
      return (
        <div key={i}>
          <img src={item.image} className="margaritasImg" />
          <div>
            <b>{item.name}</b>
          </div>
          <div>${item.price}</div>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      );
    });
  };

  return <div>{displayAllProducts()}</div>;
}

export default Cocktails;
