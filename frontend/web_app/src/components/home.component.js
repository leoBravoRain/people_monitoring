import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

class Work_Env_Manager_Dashboard extends Component {

	render() {

		// console.log(this);

		return(

			<div className = 'container'>

				<div className="alert alert-primary" role="alert">

					<p>

						Con esta plataforma se puede gestionar de mejor forma el ambiente laboral dentro de las áreas de trabajo de tu empresa

					</p>
										
					<p className="alert alert-light" role="alert">

						<h4>

							¿Cómo funciona?

						</h4>

						<ul class="list-group">

							<li class="list-group-item">

								1. Registra tu empresa, y crea cada una de las áreas que quieras monitorear

							</li>

							<li class="list-group-item">

								2. Envía el link del área a los trabajadores de cada área

							</li>

							<li class="list-group-item">

								3. Los trabajadores del área envían sus estados de ánimo y mensajes detallados, todo de forma totalmente anónima

							</li>

							<li class="list-group-item">

								4. Recibe y monitorea las respuestas de los trabajadores en tiempo real

							</li>

						</ul>
						
					</p>

					<div className = "container" style = {{textAlign: "center"}}>

						<h5> ¡Pruébalo, es gratis! </h5>	
						
					</div>

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