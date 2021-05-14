import React from 'react';
import './cocktails.css'
// import {custom} from '../Custom/ingredients'


function CreateYourOwn(props) {
    const Alcohol = ['vodka', 'whiskey', 'tequila', 'rum', 'champagne']
    const Juices= ['orange' , 'cranberry' , 'tomato' , 'lemon' ,  'lime' ]
    const  Ingredients= ['Ginger', 'Mint', 'cinnamon']
    const  Syrup= ['Blue Curacao','Pure Sugar Cane','Grenadine', 'Passion Fruit', 'Strawberry ','Sweetner Sugar Free','Vanilla','Mojito Mint']
    const  Sodas= ['Soda water', 'Club Soda', 'Tonic Water', 'Ginger Ale', 'Ginger Beer','Lemon-Lime Soda', 'Cola', 'Root Beer']


    const showAlcohol = () => {
        return Alcohol.map(eachIngredient => {
        return <button style= {{width: "15vw", padding: "20px"}}type="button" className='btn btn-primary'> {eachIngredient}</button>
            })

    }
    const showJuices = () => {
        return Juices.map(eachIngredient => {
        return <button style= {{width: "15vw", padding: "20px"}}type="button" className='btn btn-primary'> {eachIngredient}</button>
            })

    }
    const showIngredients = () => {
        return Ingredients.map(eachIngredient => {
        return <button style= {{width: "15vw", padding: "20px"}}type="button" className='btn btn-primary'> {eachIngredient}</button>
            })

    }
    const showSyrup = () => {
        return Syrup.map(eachIngredient => {
        return <button style= {{width: "15vw", padding: "20px"}}type="button" className='btn btn-primary'> {eachIngredient}</button>
            })

    }
    const showSodas = () => {
        return Sodas.map(eachIngredient => {
        return <button style= {{width: "15vw", padding: "20px"}}type="button" className='btn btn-primary'> {eachIngredient}</button>
            })

    }
    

    // const listAll = custom.forEach(e => console.log(e))

    return (
        <div>
            <h1>Create Your Own</h1>
            <h2>Choose Alcohol:</h2>
            <div className="btn-group" >
                {showAlcohol()}
            </div>
            <h2>Choose Juices:</h2>
            <div className="btn-group" >
                {showJuices()}
            </div>
            <h2>Choose Ingredients:</h2>
            <div className="btn-group" >       
                {showIngredients()}
            </div>
            <h2>Choose Syrup:</h2>
            <div className="btn-group" >       
                {showSyrup()}
            </div>
            <h2>Choose Sodas:</h2>
            <div className="btn-group" >       
                {showSodas()}
            </div>  
            
        </div>
    );
}

export default CreateYourOwn;