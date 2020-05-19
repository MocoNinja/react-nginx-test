import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h2>Test React App</h2>
          <p>
            Una pequeña página para ver cómo desplegar React en Nginx (docker +
            nativo)
          </p>
          <nav>
            <Link className="badge badge-primary ml-4 mr-2 p-3" to={"/"}>
              Home
            </Link>
            <Link
              className="badge badge-primary ml-2 mr-4 p-3"
              to={"/contacts"}
            >
              Contact
            </Link>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
