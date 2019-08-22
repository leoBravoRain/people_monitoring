import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

// fake data
var areas = [

	{name: 'Mantención'},
	{name: 'Area de Producción 1'},
	{name: 'Area de Producción 2'},
	{name: 'Finanzas'},
	{name: 'Recursos Humanos'},
	{name: 'Marketing'}
];

class Home extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			group_name: 'Future Inc',
			areas: areas,
		}

		this.create_area_button = this.create_area_button.bind(this);

	};

	create_area_button() {

		this.props.history.push('/work_env_manag_home/dashboard_group/create_new_area/');
		// this.props.match.url.concat('/work_env_manag_home/dashboard_group/create_new_group');

	};

	render() {

		console.log(this);

		return(

			<div className = 'container'>

				<h2>

					Empresa {this.state.group_name}

				</h2>

				<p> 

					<button type="button" className ="btn btn-primary" onClick = {this.create_area_button}>Crear nueva area</button>

				</p>
				<div className = 'table table-responsive'>

					<table className = 'table'>

						<thead>

							<tr>

								<th> 

									Numero

								</th>

								<th>

									Area

								</th>

							</tr>

						</thead>

						<tbody>

							{this.state.areas.map( (area, idx) =>

								<tr key = {idx}>
									<td> {idx + 1} </td>
									<td> 

										<Link to = { this.props.match.url.concat('/dashboard_area/', area.name)}>

											{area.name} 
												
										</Link>

									</td>

								</tr>
							)}

						</tbody>

					</table>

				</div>
        
			</div>

		);

	}

}

export default Home;