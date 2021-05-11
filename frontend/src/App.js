import "./App.css";
import { useState, useEffect, useContext } from "react";
import TheContext from "./TheContext";
import { Switch, Link, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Auth from "./Auth";
import actions from "./api";

function App() {
  const [user, setUser] = useState({});
  const context = { user, setUser };

  useEffect(() => {
    console.log("app mounted");
    actions.getUser().then((res) => {
      setUser(res.data);
    });
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <TheContext.Provider value={context}>
      <div className="App">
        {user?.name && (
          <div>
            <p>Welcome {user?.name}</p>
            <button onClick={handleLogout}>Log Out</button>
          </div>
        )}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
