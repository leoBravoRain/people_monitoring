import React, { Component } from "react";

import { BrowserRouter as Link } from "react-router-dom";

import {Line} from 'react-chartjs-2';
// make request to server
import axios from 'axios';
import {fs} from "../config/firebase";
// fake data
// var messages = [

// 	{date: '19-03-2019', message: 'Mi jefe directo me grita cada vez que quiere pedirme algo, debería mejorar su trato conmigo'},
// 		{date: '22-03-2019', message: 'Mi jefe directo es muy prepotente en las reuniones que tenemos'},
// 		{date: '1-04-2019', message: 'Ha mejorado demasiado el trato de mi jefe, ahora es muy respetuoso conmigo y mis compañeros ¡Gracias por la intervención!'}

// ]

// fake data
var actions = [

	{date: '22-03-2019', action: 'Se conversa con jefe directo para que mejore trato con trabajadores'},
	{date: '25-03-2019', action: 'Se envía a jefe directo a couching para mejorar trato con colaboradores'}

]

// componentn itself
class Dashboard_Areas extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			area_name: this.props.match.params.area_name,
			messages: [],
			actions: [],
			data: {},
			get_data: false,
			get_actions: false,
		}

		this.create_action_button = this.create_action_button.bind(this);
		this.get_data_from_API = this.get_data_from_API.bind(this);
		this.get_messages_from_worker = this.get_messages_from_worker.bind(this);
		// this.create_new_aciton = this.create_new_aciton.bind(this);

	};

	create_action_button() {

		const url = '/work_env_manag_home/dashboard_group/';
		this.props.history.push(url.concat(this.props.match.params.group_id, '/', this.props.match.params.group_name, '/dashboard_area/', this.props.match.params.area_id, '/', this.props.match.params.area_name, '/create_new_manager_action'));

	};

	// get data from API
	get_data_from_API() {

		console.log("hi");

		// get request for get data
        fs.collection('groups').doc(this.props.match.params.group_id).collection('areas').doc(this.props.match.params.area_id).collection("califications").get().then( snapshotquery => {

            	// data structure for chart data
            	const data = [];
            	const labels = [];

    		    // iterate over each item
    		    snapshotquery.forEach(doc => {

            		// get data
            		data.push(doc.data().calification);
            		labels.push(doc.data().date);

    		    });

            	// data sctructure
        		const data_ = {};
        		data_['labels'] = labels;

        		// temporal variable
        		var tmp = {
        				label: 'Estado de animo del area',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(75,192,192,0.4)',
						borderColor: 'rgba(75,192,192,1)',
						borderCapStyle: 'butt',
						borderDash: [],
						borderDashOffset: 0.0,
						borderJoinStyle: 'miter',
						pointBorderColor: 'rgba(75,192,192,1)',
						pointBackgroundColor: '#fff',
						pointBorderWidth: 1,
						pointHoverRadius: 5,
						pointHoverBackgroundColor: 'rgba(75,192,192,1)',
						pointHoverBorderColor: 'rgba(220,220,220,1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
        		};
        		tmp['data'] = data;
        		data_['datasets'] = [tmp];

            	// update state
            	this.setState({

            		data: data_,
            		get_data: true,

            	});

            	// console.log(this.state.data.labels.length);

            })

            // if error
            .catch(function (error){

            	window.confirm('Ups, tuvimos un error, ¡Vuelve a intentarlo mas tarde!');
            	// dislpay error in console
                console.log(error);

            });

	};

	get_actions_from_API(){

		// get request for get data
        // axios.get('http://192.168.1.9:4000/people_monitoring/action_of_manager/' + this.props.match.params.area_id)
        fs.collection('groups').doc(this.props.match.params.group_id).collection('areas').doc(this.props.match.params.area_id).collection("actions_of_manager").get().then( snapshotquery => {

        	// // if ok
         //    .then(response => {

         		let actions = [];

 			    // iterate over each item
 			    snapshotquery.forEach(doc => {

 	        		// get data
 	        		const action = {
 	        			description: doc.data().description,
 	        			date: doc.data().date.toDate().toString()
 	        		}

 	        		actions.push(action);

 			    });

            	// console.log(response);

            	// update state
            	this.setState({

            		actions: actions,
            		get_actions: true,

            	});

            })

            // if error
            .catch(function (error){

            	window.confirm('Ups, tuvimos un error, ¡Vuelve a intentarlo mas tarde!');
            	// dislpay error in console
                console.log(error);

            });

	};

	get_messages_from_worker() {

		// get request for messages from users
        // axios.get('http://192.168.1.9:4000/people_monitoring/message_from_worker/' + this.props.match.params.area_id)
        fs.collection('groups').doc(this.props.match.params.group_id).collection('areas').doc(this.props.match.params.area_id).collection("messages_from_workers").get().then( snapshotquery => {

            	// get data from API
            	// const messages = response.data;
            	let messages = [];

			    // iterate over each item
			    snapshotquery.forEach(doc => {

	        		// get data
	        		const message = {
	        			message: doc.data().message,
	        			date: doc.data().date.toDate().toString()
	        		}

	        		messages.push(message);

			    });

            	// update state
            	this.setState({

            		messages: messages,

            	});

            })

            // if error
            .catch(function (error){

            	window.confirm('Ups, tuvimos un error, ¡Vuelve a intentarlo mas tarde!');
            	// dislpay error in console
                console.log(error);

            });

	}

	// life cycle of component
	componentDidMount() {

		// // get request for messages from users
  //       axios.get('http://192.168.1.9:4000/people_monitoring/message_from_worker/' + this.props.match.params.area_id)

  //       	// if ok
  //           .then(response => {

  //           	// get data from API
  //           	const messages = response.data;

  //           	// console.log(messages);

  //           	// update state
  //           	this.setState({

  //           		messages: messages,

  //           	});

  //           })

  //           // if error
  //           .catch(function (error){

  //           	window.confirm('Ups, tuvimos un error, ¡Vuelve a intentarlo mas tarde!');
  //           	// dislpay error in console
  //               console.log(error);

  //           });
		
		// get initial data
		this.get_data_from_API();
		this.get_messages_from_worker();

		// update data each (last_argument) milisecons
		setInterval(this.get_data_from_API, 10000);
		setInterval(this.get_messages_from_worker, 10000);

		// get actions
		this.get_actions_from_API();

	};

	// render item
	render() {

		// console.log(this.state.messages);

		return(

			<div className = 'container'>

				<h1>

					Area {this.state.area_name}

				</h1>

				<div className="alert alert-primary" role="alert">

					<p>

						Debes enviarles el LINK del área a los trabajadores del área para que ellos puedan calificar el área y enviarte mensajes.

					</p>

					<h2>

						Link del área:

					</h2>

					<div className="alert alert-success" role="alert">

						{'http://192.168.1.9:3000/dashboard_worker/' + this.props.match.params.area_id + '/' + this.props.match.params.area_name}

					</div>

					<div className ="alert alert-success" role="alert">

						Este LINK debes compartirlo con los trabajadores del área

					</div>

				</div>

				<div className = 'container'>

					<h3>

						Monitoreo de estado anímico

					</h3>

					{this.state.get_data && this.state.data.labels.length > 0 

						? 

							null 

						: 

						<div className="alert alert-danger" role="alert">

							Los trabajadores aún no ingresan calificaciones

						</div>

					}

					<Line data={this.state.data} />

				</div>

				<div className = 'container'>

					<h3>

						Mensajes de trabajadores del área

					</h3>

					<div className="alert alert-primary" role="alert">

						Recuerda que los mensajes enviados por los trabajadores son totalmente anónimos

					</div>

					<div> 

						{this.state.messages.length > 0

							?

								null

							:

								<div className="alert alert-danger" role="alert">

									Los trabajadores aún no te envían mensajes

								</div>

						}

					</div>
					
					<div className = 'table table-responsive'>

						<table className = 'table'>

							<thead>

								<tr>

									<th> 

										Número

									</th>

									<th>

										Fecha

									</th>

									<th>

										Mensaje

									</th>

								</tr>

							</thead>

							<tbody>

								{this.state.messages.map( (message, idx) =>

									<tr key = {idx}>

										<td> {idx + 1} </td>
										<td> {message.date} </td>
										<td> {message.message} </td>

									</tr>
								)}

							</tbody>

						</table>

					</div>

				</div>

				<div className = 'container'>

					<h3>

						Acciones tomadas

					</h3>

					<div className="alert alert-primary" role="alert">

						Acá puedes registrar las acciones correctivas que vayas realizando, de tal forma de gestionar y analizar si es que influyen en el estado anímico del área
						
					</div>

					{this.state.get_actions && this.state.actions.length > 0 

						? 

							null 

						: 

						<div className="alert alert-danger" role="alert">

							Aún no registras acciones

						</div>

					}

					<p>

						<button type="button" className ="btn btn-primary" onClick = {this.create_action_button}> 

							Agregar acción 

						</button>

					</p>

					<div className = 'table table-responsive'>

						<table className = 'table'>

							<thead>

								<tr>

									<th> 

										Número

									</th>

									<th>

										Fecha

									</th>

									<th>

										Acción

									</th>

								</tr>

							</thead>

							<tbody>

								{this.state.actions.map( (action, idx) =>

									<tr key = {idx}>

										<td> {idx + 1} </td>
										<td> {action.date} </td>
										<td> {action.description} </td>

									</tr>
								)}

							</tbody>

						</table>

					</div>

				</div>
        
			</div>

		);

	}

}

export default Dashboard_Areas;