import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./LiquorStore.css";

import actions from '../api';
// import { Link, Route, Switch } from 'react-router-dom';



const LiquorStore = (props)=>{
    const [bottle, setBottle]=useState([]);
    console.log(props);
   


useEffect(()=>{
    actions.getBottle().then((res) => {
      console.log(res)
        setBottle(res.data.bottles);
      });

},[]);
console.log(bottle)

  const showBottles=()=>{
    return bottle.map((bottles,i)=>{
        return (
          
            <div className="container1">
             <img src={bottles.Image_url} className="bottleImages"/>
            {bottles.Name}
           <div className="bottleName">{bottles.Category}  </div> 
           <div className="bottlePrice">${bottles.Price}</div> 
           <div className="bottleDescription">{bottles.Description}</div>
           {/* <div><button className="cart-button">Add to Cart</button></div>  */}
           <button
              className="cart-button"
              // onClick={() => addToWishlist(item.product)}
            >
              Add to Cart
            </button>

           </div>
          );
    });
  }
    return (

      <div className ="container1">
        <div className = "header">
        <div>
        <h1>Our Liquor Store </h1> 
        </div>
        <div className="header-div1">
        <img src="https://i.pinimg.com/originals/f1/a6/b6/f1a6b62def7a67a90263587a2966cde4.jpg" />
      </div>
      

          

</div>

           <div>{showBottles()}</div> 
            
        </div>
        
    );

};

export default LiquorStore;