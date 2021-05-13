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
import Cart from "./Components/Cart";
// import Navbar from "./Components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import LiquorStore from "./Components/LiquorStore";

function App() {
  const [user, setUser] = useState({});
  const context = { user, setUser };

  useEffect(() => {
    console.log("app mounted");
    actions.getUser().then((res) => {
      setUser(res.data);
    });
  }, []);

  // const handleLogout = () => {
  //   setUser(null);
  //   localStorage.removeItem("token");
  // };

  return (
    <TheContext.Provider value={context}>
      <div className="App">
        <Navbar
          bg="info"
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Brand>
              <img
                className="navimg"
                src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Drinks-PNG-/Summer_Cocktail_PNG_Clip_Art_Image.png?m=1507172108"
                width="20px"
              />{" "}
              Slushie World
            </Navbar.Brand>
            <Nav>
              <Link className="NavL" to="/">
                Home
              </Link>
              <Link className="NavL" to="/Cocktails">
                Cocktails
              </Link>
              <Link className="NavL" to="/Cocktails">
                Create Your Own
              </Link>
              <Link className="NavL" to="/LiquorStore">
                Our Liquor Store
              </Link>

              <div className="login-container">
                <Auth setUser={setUser} />
              </div>
              <CartIcon />
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/Cocktails" component={Cocktails} />
          <Route exact path="/Create-Your-Own" component={CreateYourOwn} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/LiquorStore" component={LiquorStore} />
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
