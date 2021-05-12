import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import { Link, Route, Switch } from 'react-router-dom';



const LiquorStore = (props)=>{
    const [bottle, setBottle]=useState([]);
    console.log(props);
   


useEffect(()=>{
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
        setBottle(res.data);
      });

},[]);

  const showBottles=()=>{
    return bottle.map((bottle,i)=>{
        return (
            <div>
              <div>
                {/* <Link to={`/bottle/${bottle._id}`}>
                  <img src={bottle.image_url} />
                </Link> */}
              </div>
              <div></div>
            </div>
          );
    });
  }
    return (
        <div>
            Here are all our bottles
            {showBottles()}
            
        </div>
    );

};

export default LiquorStore;