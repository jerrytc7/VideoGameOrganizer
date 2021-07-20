import './App.css';
import Home from "./components/Home"
import Upload from "./components/Upload"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (   
    <div className="App">
        <Router>
         <Navbar/>
            <Switch>
              <Route exact path= "/" component={Home}/>
              <Route exact path= "/upload" component={Upload}/>
              <Route exact path= "/login" component={Login}/>
            </Switch>
        </Router>    



    </div>
  );
}

export default App;
