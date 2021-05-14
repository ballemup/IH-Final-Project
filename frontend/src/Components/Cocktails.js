import React, { useState, useEffect } from "react";
import "./cocktails.css";
import actions from "../api";

function Cocktails(props) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    actions.getMargs().then((res) => {
      setDrinks(res.data.margaritas);
    });
  }, []);
  console.log(drinks);
  const addToCart = (data) => {
    console.log(data);

    let cart = { ...props.cart };
    if (cart[data.id]) {
      alert("item already in Shopping cart");
    } else {
      // adding quantity key value to data object
      data.quantity = 1;
      // data is the object you clicked on, cart[data.id] is the unique item within the list of items in the cart. This adds it to the cart
      cart[data.id] = data;
    }
    // Setting cart to new values
    props.setCart(cart);
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
