import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/home.component";
import Work_Environment_Manager_Home from "./components/work_environment_manager_home.component";
import Create_New_Group from './components/create_new_group.component';
import Work_Env_Manager_Dashboard from './components/work_environment_manager_dashboard.component';
import Create_New_Area from './components/create_new_area.component';
import Dashboard_Areas from './components/dashboard_areas.component';
import Dashboard_Worker from './components/worker_dashboard.component';

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
        {/* <Route path = '/work_env_manag_home/dashboard_group' exact component = {Work_Env_Manager_Dashboard} /> */}
        <Route path = '/work_env_manag_home/dashboard_group/' exact component = {Work_Env_Manager_Dashboard} />
        <Route path = '/work_env_manag_home/dashboard_group/create_new_area/' exact component = {Create_New_Area} />
        <Route path = '/work_env_manag_home/dashboard_group/dashboard_area/:area_name' exact  component = {Dashboard_Areas} />
        <Route path = '/dashboard_worker/' exact component = {Dashboard_Worker} />
      </Router>

    );

  }

}

// exporting app
export default App;