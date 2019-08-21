import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/home.component";
import Work_Environment_Manager_Home from "./components/work_environment_manager_home.component";
import Create_New_Group from './components/create_new_group.component';

// Component 
class App extends Component {

  // render method
  render() {

    return (

      <Router>

        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link to="/" className="navbar-brand"> 

              Monitoreo de clima laboral

            </Link>

            <div className="collpase navbar-collapse">

              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">

                  <Link to="/" className="nav-link">

                    Inicio

                  </Link>
                 
                </li>

              </ul>

            </div>

          </nav>

        </div>

        <Route path = '/' exact component = {Home} />
        <Route path = '/work_env_manag_home/' exact component = {Work_Environment_Manager_Home} />
        <Route path = '/work_env_manag_home/create_new_group/' exact component = {Create_New_Group} />

      </Router>

    );

  }

}

// exporting app
export default App;