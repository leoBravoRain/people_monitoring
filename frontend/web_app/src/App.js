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
import Login_Worker from './components/login_worker.component';
import Login_to_Group from './components/login_to_group.component';
import Manager_Action from './components/create_new_action_of_manager.component'

// Component 
class App extends Component {

  // render method
  render() {

    return (

      <Router>

        <div className="container">

          <nav className="navbar navbar-expand-lg navbar-light bg-light ">

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

        {/* Home */}
        <Route path = '/' exact component = {Home} />

        {/* manager home*/}
        <Route path = '/work_env_manag_home/' exact component = {Work_Environment_Manager_Home} />

        {/* create group /login manager */}
        <Route path = '/work_env_manag_home/create_new_group/' exact component = {Create_New_Group} />
        <Route path = '/work_env_manag_home/login_to_group/' exact component = {Login_to_Group} />

        {/*dash board of group */}
        <Route path = '/work_env_manag_home/dashboard_group/:group_id/:group_name/' exact component = {Work_Env_Manager_Dashboard} />
        <Route path = '/work_env_manag_home/dashboard_group/:group_id/:group_name/create_new_area/' exact component = {Create_New_Area} />

        {/* dahsboard of area*/}
        <Route path = '/work_env_manag_home/dashboard_group/:group_id/:group_name/dashboard_area/:area_id/:area_name' exact  component = {Dashboard_Areas} />
        <Route path = '/work_env_manag_home/dashboard_group/:group_id/:group_name/dashboard_area/:area_id/:area_name/create_new_manager_action' exact component = {Manager_Action} />

        {/* login worker*/}
        <Route path = '/login_worker/' exact component = {Login_Worker} />

      {/* dashboard worker*/}
        <Route path = '/dashboard_worker/:group_id/:area_id/:area_name' exact component = {Dashboard_Worker} />

      </Router>

    );

  }

}

// exporting app
export default App;