import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";
// make request to server
// import axios from 'axios';
import {fs, auth} from "../config/firebase";

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

		console.log(this)
		const url = '/work_env_manag_home/dashboard_group/';
		this.props.history.push(url.concat(this.props.match.params.group_id, '/', this.props.match.params.group_name, '/', 'create_new_area'));
		// this.props.match.url.concat('/work_env_manag_home/dashboard_group/create_new_group');

	};

	componentDidMount() {

		// check login
		auth.onAuthStateChanged((user) => {

		    if (user) {

		      console.log("user logged");

		      // this.props.history.push('/work_env_manag_home/');

		    } 

		    else {

		    	console.log("user not logged");

		    	this.props.history.push('/work_env_manag_login/');
		    }

	  	});


		// get request for get data
        // axios.get('http://192.168.1.9:4000/people_monitoring/areas/' + this.props.match.params.group_id)
        fs.collection('groups').doc(this.props.match.params.group_id).collection('areas').get().then( snapshotquery => {

        	// if ok
            // .then(response => {

            	let areas = [];

            	// get data from API
            	// const areas = response.data;

        	    // iterate over each item
        	    snapshotquery.forEach(doc => {

        	    	// console.log(doc.data());
        	    	let area = doc.data();
        	    	// post['doc_id'] = doc.id;
        	    	// post['image'] = "https://www.oreilly.com/library/view/deep-learning/9781491924570/assets/dpln_0201.png";
        			// add item to array
        			// posts.push(doc.data());
        			area["_id"] = doc.id;
        			areas.push(area);

        	    });

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

				<div className="alert alert-primary" role="alert">

					<p>

						Recuerda guardar en algún lugar el ID de la empresa, ya que 
						para ingresar a esta sección, debes ingresar el ID 
						(junto a la contraseña que ingresaste al registrar la empresa).

					</p>

					<p>

						Si no recuerdas la contraseña, ponte en contacto con los administradores de la plataforma

					</p>
					
					<h4>

						ID de empresa:

					</h4>

					<div className="alert alert-danger" role="alert">

						{this.props.match.params.group_id}

					</div>

					<div className="alert alert-danger" role="alert">

						No debes compartir esta ID, esta información es solo para el encargado del clima laboral

					</div>

				</div>

				<p> 

					<button type="button" className ="btn btn-primary" onClick = {this.create_area_button}>Crear nueva área</button>

				</p>
				<div className = 'table table-responsive'>

					<table className = 'table'>

						<thead>

							<tr>

								<th> 

									Número

								</th>

								<th>

									Área

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