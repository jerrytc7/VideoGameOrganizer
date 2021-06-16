import { Component } from 'react';
import './App.css';
import Home from "./compenents/Home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path= "/" compenent={Home}/>
            </Switch>
        </Router>      
    </div>
  );
}

export default App;
