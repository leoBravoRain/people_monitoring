import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";
// make request to server
// import axios from 'axios';
import {fs, auth} from "../config/firebase";

// // fake data
// var groups = [

// 	{name: 'Mantención'},
// 	{name: 'Area de Producción 1'},
// 	{name: 'Area de Producción 2'},
// 	{name: 'Finanzas'},
// 	{name: 'Recursos Humanos'},
// 	{name: 'Marketing'}
// ];

class List_of_Groups extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// console.log(this);

		// initial states
		this.state = {

			user_id: null,
			groups: [],
		}

		this.on_group = this.on_group.bind(this);

	};

	on_group() {

		console.log(this);

		// const url = '/work_env_manag_home/dashboard_group/';
		// this.props.history.push(url.concat(this.props.match.params.group_id, '/', this.props.match.params.group_name, '/', 'create_new_area'));
		// this.props.match.url.concat('/work_env_manag_home/dashboard_group/create_new_group');

	};

	componentDidMount() {

		// check login
		auth.onAuthStateChanged((user) => {

		    if (user) {

		      console.log("user logged");

		      // this.setState({

		      // 	user_id: user.uid

		      // })


  		// // get request for get data
          fs.collection('groups').where("uid", "==", user.uid).get().then( snapshotquery => {

          	// if ok
              // .then(response => {

              	let groups = [];

              	console.log(snapshotquery);
              	
              	// get data from API
              	// const groups = response.data;

          	    // iterate over each item
          	    snapshotquery.forEach(doc => {

          	    	// console.log(doc.data());
          	    	let area = doc.data();
          	    	// area["name"] = 
          	    	// post['doc_id'] = doc.id;
          	    	// post['image'] = "https://www.oreilly.com/library/view/deep-learning/9781491924570/assets/dpln_0201.png";
          			// add item to array
          			// posts.push(doc.data());
          			area["_id"] = doc.id;
          			groups.push(area);

          	    });

              	// update state
              	this.setState({

              		groups: groups,

              	});

              })

              // if error
              .catch(function (error){

              	window.confirm('Ups, tuvimos un error, ¡Vuelve a intentarlo mas tarde!');
              	// dislpay error in console
                  console.log(error);

              });


		      // this.props.history.push('/work_env_manag_home/');

		    } 

		    else {

		    	console.log("user not logged");

		    	this.props.history.push('/work_env_manag_login/');
		    }

	  	});

	};

	render() {

		return(

			<div className = 'container'>

				<h2>

					Mis empresas

				</h2>

				<p className="alert alert-primary" role="alert">

					<p>

						Acá puedes ver todas las empresas que tienes registradas.	

					</p>
					<p>

						Si no tienes empresas registradas, puedes crearlas en la sección "Crear nueva empresa" de la página anterior.

					</p>

					
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

							{this.state.groups.map( (area, idx) =>

								<tr key = {idx}>
									<td> {idx + 1} </td>
									<td> 

										<Link to = { "/work_env_manag_home/dashboard_group/" + area._id + "/" + area.name}>

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

export default List_of_Groups;