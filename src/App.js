import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <header>
            <h2>Test React App</h2>
          </header>
          <p>
            Una pequeña página para ver cómo desplegar React en Nginx (docker +
            nativo)
          </p>
          <button type="button" className="btn btn-primary ml-4 mr-2">
            <Link className="badge badge-primary" to={"/"}>
              Home
            </Link>
          </button>
          <button type="button" className="btn btn-primary ml-2 mr-4">
            <Link className="badge badge-primary" to={"/contacts"}>
              Contact
            </Link>
          </button>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contacts" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
