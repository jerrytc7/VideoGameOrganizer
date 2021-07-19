import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path= "/home" component={Home}/>
              <Route exact path= "/about" component={About}/>
              <Route exact path= "/login" component={Login}/>
              <Route exact path= "/" component={Navbar}/>
            </Switch>
        </Router>      
    </div>
  );
}

export default App;
