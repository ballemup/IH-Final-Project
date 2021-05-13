import React, { useState, useEffect } from "react";
import "./cocktails.css";
import axios from "axios";
import actions from "../api";

function Cocktails(props) {
  console.log(props);

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    actions.getMargs().then((res) => {
      console.log(res);
      setDrinks(res.data.margaritas);
    });
  }, []);
  console.log(drinks);

  // Post product to Cart
  function addToCart(item) {
    let product = {
      name: item.name,
      price: item.price,
      image: item.image,
    };
    axios.post(`./Cart`, {
      product: product,
    });
  }

  let displayAllProducts = () => {
    return drinks.map((item, i) => {
      return (
        <div className = "Drinks" key={i}>
          <img className = "DrinkImg" src={item.image} />
          <p className = "drinkTxt">
            <b>{item.name}</b><br></br>
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
