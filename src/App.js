import "./App.css";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  useEffect(()=>{
    setUsername(localStorage.getItem("username"))
  },[])
  return (
    <div className="App">
      <Router>
        <Navbar username={username} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/login">
            <Login setUsername={setUsername}/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
