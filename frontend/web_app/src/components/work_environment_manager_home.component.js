import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

class Work_Environment_Manager_Home extends Component {

	render() {

		return(

			<div className = 'container'>

				<p className = 'container'>

					<Link className ="btn btn-primary" to = { this.props.match.url.concat('/create_new_group')}>

						Crear nueva empresa para monitorear
							
					</Link>

				</p>

				<p className = 'container'>

					<Link className ="btn btn-primary" to = { this.props.match.url.concat('control_risk_consult')}>

	                    Ver empresa

                  	</Link>

				</p>
        
			</div>

		);

	}

}

export default Work_Environment_Manager_Home;