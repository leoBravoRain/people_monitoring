import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";
// make request to server
import axios from 'axios';

// // fake data
// var areas = [

// 	{name: 'Mantención'},
// 	{name: 'Area de Producción 1'},
// 	{name: 'Area de Producción 2'},
// 	{name: 'Finanzas'},
// 	{name: 'Recursos Humanos'},
// 	{name: 'Marketing'}
// ];

class Home extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// console.log(this);

		// initial states
		this.state = {

			group_name: this.props.match.params.group_name,
			areas: [],
		}

		this.create_area_button = this.create_area_button.bind(this);

	};

	create_area_button() {

		this.props.history.push('/work_env_manag_home/dashboard_group/create_new_area/');
		// this.props.match.url.concat('/work_env_manag_home/dashboard_group/create_new_group');

	};

	componentDidMount() {

		// get request for get data
        axios.get('http://192.168.1.9:4000/people_monitoring/areas/' + this.props.match.params.group_id)

        	// if ok
            .then(response => {

            	// get data from API
            	const areas = response.data;

            	// update state
            	this.setState({

            		areas: areas,

            	});

            })

            // if error
            .catch(function (error){

            	window.confirm('Ups, tuvimos un error, ¡Vuelve a intentarlo mas tarde!');
            	// dislpay error in console
                console.log(error);

            });


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

										<Link to = { this.props.match.url.concat('dashboard_area/', area._id, '/', area.name)}>

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