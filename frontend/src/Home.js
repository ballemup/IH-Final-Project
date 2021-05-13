import React, { useEffect, useState, useContext } from "react";
import TheContext from "./TheContext";
import axios from "axios";
import actions from "./api";
import Auth from "./Auth";

function Home(props) {
  const { user, setUser } = useContext(TheContext);
  console.log(props);
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Slushie World</h1>
          <p class="lead">
            Enjoy the Best Slushies at home when you order from Slushie World!
            We deliver to your door in just a couple of clicks. Order from our
            set menu or Create your own drink!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
