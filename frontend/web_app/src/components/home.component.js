import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

import Home_Menu from "./home_menu.component";

class Work_Env_Manager_Dashboard extends Component {

	render() {

		// console.log(this);

		return(

			<div className = 'container'>

				<div className = "alert alert-primary">

					<Home_Menu url_manager = {this.props.match.url.concat('work_env_manag_login')} url_worker = {this.props.match.url.concat('login_worker')}/>

				</div>

				<div className = "alert alert-primary">

					<h3 className = "p-3 text-center">

						¿Cómo funciona?
						
					</h3>

					<div 
						className = "embed-responsive embed-responsive-16by9"
						// style = {{
						// 	// width: "60%",
						// 	// height: "60%",
						// 	alignContent: "center",
						// 	justifyContent: "center"
						// }}
					>

						<iframe className = "embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/aQQrozWPf6M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
							
						</iframe>

						<h3 className = "p-3 text-center">

							¡Es gratis!
							
						</h3>
						

					</div>

				</div>

				<p className = "text-center p-3 container">

				<h3>

					¡Es gratis!

				</h3>

					<a class="btn btn-success" href="https://forms.gle/RJCLF3VH6WSfEKDU6" role="button">

						Enviar opinión ANÓNIMA a los desarrolladores de este sistema
					
					</a>

					
					
				</p>
{/* 
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

				</div> */}

				{/* <div className = 'container'>

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

				</div> */}

				{/* <p className = 'container'>

					<Link className ="btn btn-primary btn-block" to = { this.props.match.url.concat('demo_home')}>

						Ver una demostración
							
					</Link>

				</p> */}

			</div>

		);

	}

}

export default Work_Env_Manager_Dashboard;