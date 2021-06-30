import React from "react";

import Barra from "./components/Barra";
import Footer from "./components/Footer";

import Inicio from "./views/Inicio";
import Autos from "./views/Autos";
import Contacto from "./views/Contacto";

import "./app.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Barra 
        Link={Link}
      />
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

      <Footer />
    </Router>

  );
}

export default App;
