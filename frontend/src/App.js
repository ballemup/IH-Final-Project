import "./App.css";
import "./index.css";
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
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import LiquorStore from "./Components/LiquorStore";
import Checkout from "./Components/Checkout";

// const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || "{}";
// import Footer from './Components/Footer';

function App(props) {
  const [user, setUser] = useState({});
  const context = { user, setUser };
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

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
              <Link className="NavL" to="/Create-Your-Own">
                Create Your Own
              </Link>
              <Link className="NavL" to="/LiquorStore">
                Our Liquor Store
              </Link>
              <Auth className="login-container" setUser={setUser} />
              <Link to="/Cart">
                <CartIcon cart={cart} />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Footer /> */}

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} setCart={setCart} cart={cart} />
            )}
          />
          <Route exact path="/profile" component={Profile} />
          <Route
            exact
            path="/Cocktails"
            render={(props) => <Cocktails setCart={setCart} cart={cart} />}
          />
          <Route exact path="/Create-Your-Own" component={CreateYourOwn} />
          <Route
            exact
            path="/Cart"
            render={(props) => (
              <Cart
                count={count}
                setCount={setCount}
                setCart={setCart}
                cart={cart}
              />
            )}
          />
          <Route exact path="/LiquorStore" component={LiquorStore} />
          <Route exact path="/Checkout" component={Checkout} />
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
