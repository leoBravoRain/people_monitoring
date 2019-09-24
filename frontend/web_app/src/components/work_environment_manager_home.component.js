import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";
import {auth} from "../config/firebase";

// import Control_Risk from "./control_risk_list.component";

class Work_Environment_Manager_Home extends Component {

	componentDidMount() {

		auth.onAuthStateChanged((user) => {

		    if (user) {

		      console.log("user logged");

		      this.props.history.push('/work_env_manag_home/');

		    } 

		    else {

		    	console.log("user not logged");

		    	this.props.history.push('/work_env_manag_login/');
		    }

		  });
	}

	// componentWillUnmount() {

		// console.log("stop listener");

		// // stop listener
		// auth.onAuthStateChanged();

	// }

	render() {

		return(

			<div className = 'container'>

				<h2>

					¿Qué quieres hacer?

				</h2>

				<div className="alert alert-primary" role="alert">

					<p>

						Si es que no tienes tu empresa registrada en la plataforma, entonces primero debes crearla presionando el siguiente botón

					</p>

					<p className = 'container'>

						<Link className ="btn btn-primary btn-block" to = { this.props.match.url.concat('create_new_group')}>

							Crear nueva empresa para monitorear
								
						</Link>

					</p>

				</div>

				<div className="alert alert-primary" role="alert">

					<p>

						Si es que ya tienes tu empresa registrada en la plataforma, presiona el siguiente botón

					</p>
					
					<p className = 'container'>

						<Link className ="btn btn-primary btn-block" to = { this.props.match.url.concat('login_to_group')}>

		                    Ver empresa

	                  	</Link>

					</p>

				</div>
        
			</div>

		);

	}

}

export default Work_Environment_Manager_Home;