import React, { useState, useEffect } from 'react';
import './cocktails.css'
import axios from 'axios';



function Cocktails(props) {
    console.log(props)

    const [drinks, setDrinks] = useState([]);

    useEffect(()=> {
    axios
        .get('http://iron-cors-anywhere.herokuapp.com/http://www.thecocktaildb.com/api/json/v1/1/random.php')
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

                    </div>
                    <div className = 'Drink2'>
                        <h2>Drink 2</h2>
                    </div>
                    <div className = 'Drink3'>
                        <h2>Drink 3</h2>

                    </div>
                    <div className = 'Drink4'>
                        <h2>Drink 4</h2>
                    </div>
                    <div className = 'Drink5'>
                        <h2>Drink 5</h2>
                    </div>
                    <div className = 'Drink6'>
                        <h2>Drink 6</h2>
                    </div>
                </div>
        </div>
    );
}

export default Cocktails;