import "./App.css";
import { useState, useEffect, useContext } from "react";
import TheContext from "./TheContext";
import { Switch, Link, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Auth from "./Auth";
import actions from "./api";
import Cocktails from "./Components/Cocktails";
import CreateYourOwn from "./Components/CreateYourOwn";
import CartIcon from "./Components/cart-icon/cart-icon";

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
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Cocktails">Cocktails</Link>
          <Link to="/Cocktails">Create Your Own</Link>
          <div className="login-container">
            <Auth setUser={setUser} />
          </div>
          <CartIcon />
        </nav>

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
          <Route exact path="/Cocktails" component={Cocktails} />
          <Route exact path="/Create-Your-Own" component={CreateYourOwn} />
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
