import React, { useEffect, useState, useContext } from "react";
import TheContext from "./TheContext";
import axios from "axios";
import actions from "./api";
import Auth from "./Auth";

function Home(props) {
  const { user, setUser } = useContext(TheContext);

  return <div></div>;
}

export default Home;
