import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

class Home extends Component {

	render() {

		console.log(this);

		return(

			<div className = 'container'>

				<p className = 'container'>

					<Link className ="btn btn-primary" to = { this.props.match.url.concat('work_env_manag_home')}>

						Encargado de clima laboral
							
					</Link>

				</p>

				<p className = 'container'>

					<Link className ="btn btn-primary" to = { this.props.match.url.concat('control_risk_consult')}>

	                    Trabajador

                  	</Link>

				</p>
        
			</div>

		);

	}

}

export default Home;