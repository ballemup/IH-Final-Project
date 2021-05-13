import React, { useState, useEffect } from "react";
import "./cocktails.css";
import axios from "axios";
import actions from "../api";
import Cart from "./Cart";

function Cocktails(props) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    actions.getMargs().then((res) => {
      setDrinks(res.data.margaritas);
    });
  }, []);

  const addToCart = (data) => {
    if (!props.cart.find((x) => x.id === data.id)) {
      props.setCart([...props.cart, data]);
    } else {
      return alert("item already added to Shopping Cart");
    }
    console.log("added to cart");
  };

  let displayAllProducts = () => {
    return drinks.map((item, i) => {
      return (
        <div className="Drinks" key={i}>
          <img className="DrinkImg" src={item.image} />
          <p className="drinkTxt">
            <b>{item.name}</b>
            <br></br>
            <b>Price:</b> ${item.price}
          </p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      );
    });
  };

  return <div>{displayAllProducts()}</div>;
}

export default Cocktails;
