import React, { useState, useEffect } from 'react';
import './cocktails.css'
import axios from 'axios';



function Cocktails(props) {
    console.log(props)

    const [drinks, setDrinks] = useState([]);

    useEffect(()=> {
    axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then((res) => {
            setDrinks(res.data);
        });
    }, []);
    console.log(drinks)


    return (
        
        <div className = 'page'>
            <h1>SELECT YOUR DRINK</h1>
                <div className = 'Drinks'>
                    <div className = 'Drink1'>
                        <h2>{drinks.drinks?.[0].strDrink}</h2>
                        <img className = 'DrinkImg' src={drinks.drinks?.[0].strDrinkThumb} />
                        <button>Add to Cart</button>
                    </div>
                    <div className = 'Drink2'>
                        <h2>{drinks.drinks?.[1].strDrink}</h2>
                        <img className = 'DrinkImg' src={drinks.drinks?.[1].strDrinkThumb} />
                        <button>Add to Cart</button>
                    </div>
                    <div className = 'Drink3'>
                        <h2>{drinks.drinks?.[2].strDrink}</h2>
                        <img className = 'DrinkImg' src={drinks.drinks?.[2].strDrinkThumb} />
                        <button>Add to Cart</button>
                    </div>
                    <div className = 'Drink4'>
                        <h2>{drinks.drinks?.[3].strDrink}</h2>
                        <img className = 'DrinkImg' src={drinks.drinks?.[3].strDrinkThumb} />
                        <button>Add to Cart</button>
                    </div>
                    <div className = 'Drink5'>
                        <h2>{drinks.drinks?.[4].strDrink}</h2>
                        <img className = 'DrinkImg' src={drinks.drinks?.[4].strDrinkThumb} />
                        <button>Add to Cart</button>
                    </div>
                    <div className = 'Drink6'>
                        <h2>{drinks.drinks?.[5].strDrink}</h2>
                        <img className = 'DrinkImg' src={drinks.drinks?.[5].strDrinkThumb} />
                        <button>Add to Cart</button>
                    </div>
                </div>
        </div>
    );
}

export default Cocktails;