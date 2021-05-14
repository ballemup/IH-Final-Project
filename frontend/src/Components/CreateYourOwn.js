import React, {useState} from 'react';
import './cyo.css'
// import {custom} from '../Custom/ingredients'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'


function CreateYourOwn(props) {
    const Alcohol = ['vodka', 'whiskey', 'tequila', 'rum', 'champagne']
    const Juices= ['orange' , 'cranberry' , 'tomato' , 'lemon' ,  'lime' ]
    const Ingredients= ['Ginger', 'Mint', 'cinnamon']
    const Syrup= ['Blue Curacao','Pure Sugar Cane','Grenadine', 'Passion Fruit', 'Strawberry ','Sweetner Sugar Free','Vanilla','Mojito Mint']
    const Sodas= ['Soda water', 'Club Soda', 'Tonic Water', 'Ginger Ale', 'Ginger Beer','Lemon-Lime Soda', 'Cola', 'Root Beer']

    const [color,setColor]=useState('red');
    const [textColor,setTextColor]=useState('white');


    const showAlcohol = () => {
        return Alcohol.map(eachIngredient => {
        return <button> {eachIngredient}</button>
            })

    }
    const showJuices = () => {
        return Juices.map(eachIngredient => {
        return <button> {eachIngredient}</button>
            })

    }
    const showIngredients = () => {
        return Ingredients.map(eachIngredient => {
        return <button > {eachIngredient}</button>
            })

    }
    const showSyrup = () => {
        return Syrup.map(eachIngredient => {
        return <button> {eachIngredient}</button>
            })

    }
    const showSodas = () => {
        return Sodas.map(eachIngredient => {
        return <button>{eachIngredient}</button>
            })

    }

    return (
        <div className = "main">
            <h1>Create Your Own</h1>
            <h2>Choose Alcohol:</h2>
            <div className="btn-group alcohol btn-group:active">
                {showAlcohol()}
            </div>
            <h2>Choose Juices:</h2>
            <div className="btn-group juices" >
                {showJuices()}
            </div>
            <h2>Choose Ingredients:</h2>
            <div className="btn-group ingredients" >       
                {showIngredients()}
            </div>
            <h2>Choose Syrup:</h2>
            <div className="btn-group syrup" >       
                {showSyrup()}
            </div>
            <h2>Choose Sodas:</h2>
            <div className="btn-group sodas" >       
                {showSodas()}
            </div>  
        </div>
        
    );
}

export default CreateYourOwn;