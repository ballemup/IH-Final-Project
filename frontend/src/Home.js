import React, { useEffect, useState, useContext } from "react";
import TheContext from "./TheContext";
import axios from "axios";
import actions from "./api";
import Auth from "./Auth";

function Home(props) {
  const { user, setUser } = useContext(TheContext);

  return (
    <div>
      <h4>User Login</h4>
      <Auth setUser={setUser} />
    </div>
  );
}

export default Home;
