// import logo from "./logo.svg";
import "./App.css";
import Cocktails from './Components/Cocktails'
import CreateYourOwn from './Components/CreateYourOwn'
import {Route, Link, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/Cocktails'>Cocktails</Link>
        <Link to='/Cocktails'>Create Your Own</Link>
      </nav>

      <Switch>
        <Route exact path = '/Cocktails' component={Cocktails} />
        <Route exact path = '/Create-Your-Own' component={CreateYourOwn} />
      </Switch>
    </div>
  );
}

export default App;
