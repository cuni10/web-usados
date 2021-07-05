import React,{Fragment} from "react";

import "./app.css";

import Barra from "./components/Barra";
import Footer from "./components/Footer";
import BarraMovil from "./components/BarraMovil";

import Inicio from "./views/Inicio";
import Autos from "./views/Autos";
import Contacto from "./views/Contacto";

import Media from "react-media";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px)",
          }}>
            {matches => (
              <Fragment>
                {matches.small && <BarraMovil Link={Link}/>}
                {matches.medium && <Barra Link={Link}/>}
              </Fragment>
            )}
          </Media>
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
