export const custom = { 
    Alcohol: ['vodka', 'whiskey', 'tequila', 'rum', 'champagne'],

    Juices: ['orange' , 'cranberry' , 'tomato' , 'lemon' ,  'lime' ],

    Ingredients: ['Ginger', 'Mint', 'cinnamon'],

    Syrup: ['Blue Curacao','Pure Sugar Cane','Grenadine', 'Passion Fruit', 'Strawberry ','Sweetner Sugar Free','Vanilla','Mojito Mint'],

    Sodas: ['Soda water', 'Club Soda', 'Tonic Water', 'Ginger Ale', 'Ginger Beer','Lemon-Lime Soda', 'Cola', 'Root Beer']
}


// const showList = () => {
//     let theList = []
//     for(let keys in custom){
//         console.log(custom[keys])
//     custom[keys].forEach(eachIngredient => {
//     theList.push( <button style= {{width: "30vw", padding: "20px"}}type="button" className={`btn btn-primary ${keys}`}> {eachIngredient}</button>)
//     })
// }
// return theList
// }