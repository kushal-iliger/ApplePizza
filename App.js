import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import allergene from "./components/pages/allergene";
import Bewerten from "./components/pages/Bewerten";
import kontact from "./components/pages/kontact";
import impressum from "./components/pages/impressum";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/allergene" component={allergene} />
          <Route path="/bewerten" component={Bewerten} />
          <Route path="/kontact" component={kontact} />
          <Route path="/impressum" component={impressum} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
