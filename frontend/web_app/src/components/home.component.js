import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

class Work_Env_Manager_Dashboard extends Component {

	render() {

		// console.log(this);

		return(

			<div className = 'container'>

				<div className="alert alert-primary" role="alert">

					Con esta plataforma se puede gestionar de mejor forma el ambiente laboral dentro de las áreas de trabajo de tu empresa

				</div>

				<div className = 'container'>

					<h2>

						¿Cuál es tu rol dentro de tu empresa?

					</h2>
					
					<p className = 'container'>

						<Link className ="btn btn-primary btn-block" to = { this.props.match.url.concat('work_env_manag_login')}>

							Encargado de clima laboral
								
						</Link>

					</p>

					<p className = 'container'>

						<Link className ="btn btn-info btn-block" to = { this.props.match.url.concat('login_worker')}>

		                    Trabajador

	                  	</Link>

					</p>

				</div>
        
			</div>

		);

	}

}

export default Work_Env_Manager_Dashboard;