import React from "react";

import Inicio from "./views/Inicio";
import Autos from "./views/Autos";
import Contacto from "./views/Contacto";

import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/autos">
          <Autos />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
