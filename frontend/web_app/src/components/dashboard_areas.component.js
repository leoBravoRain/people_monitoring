import React, { Component } from "react";

import { BrowserRouter as Link } from "react-router-dom";

import {Line} from 'react-chartjs-2';
// make request to server
import axios from 'axios';

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

// // fake data
// const data = {
//   labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
//   datasets: [
//     {
//       label: 'Estado de animo del area',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [-0.9, -0.9, -0.5, -0.1, 0, 0.1, 0.3, 0.1, 0.5, 0.8, 0.5, 0.8]
//     }
//   ]
// };

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
			actions: actions,
			data: {},
		}

		this.create_action_button = this.create_action_button.bind(this);
		this.get_data_from_API = this.get_data_from_API.bind(this);

	};

	create_action_button() {

		this.props.history.push('/work_env_manag_home/create_new_area/');

	};

	// get data from API
	get_data_from_API() {

		// get request for get data
        axios.get('http://192.168.1.9:4000/people_monitoring//daily_question/' + this.props.match.params.area_id)

        	// if ok
            .then(response => {

            	// get data from API
            	const califications = response.data;

            	// data structure for chart data
            	const data = [];
            	const labels = [];

            	// console.log(califications);
            	califications.map( function(currentValue, index, arr) {

            		// get data
            		data.push(currentValue.calification);
            		labels.push(currentValue.date);

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

            	});

            })

            // if error
            .catch(function (error){

            	window.confirm('Ups, tuvimos un error, ¡Vuelve a intentarlo mas tarde!');
            	// dislpay error in console
                console.log(error);

            });

	};

	// life cycle of component
	componentDidMount() {

		// get request for messages from users
        axios.get('http://192.168.1.9:4000/people_monitoring/message_from_worker/' + this.props.match.params.area_id)

        	// if ok
            .then(response => {

            	// get data from API
            	const messages = response.data;

            	// console.log(messages);

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
		
		// get initial data
		this.get_data_from_API();

		// update data each (last_argument) milisecons
		setInterval(this.get_data_from_API, 10000);

	};

	// render item
	render() {

		// console.log(this.state.messages);

		return(

			<div className = 'container'>

				<h1>

					Area {this.state.area_name}

				</h1>

				<h2>

					Link: 

				</h2>

				<p>

					{this.props.match.params.area_id}

				</p>

				<div className = 'container'>

					<h3>

						Monitoreo de estado anímico

					</h3>

					<Line data={this.state.data} />

				</div>

				<div className = 'container'>

					<h3>

						Mensajes de trabajadores del área

					</h3>
					
					<div className = 'table table-responsive'>

						<table className = 'table'>

							<thead>

								<tr>

									<th> 

										Numero

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

					<p>

						<button type="button" className ="btn btn-primary"> 

							Agregar acción 

						</button>

					</p>

					<div className = 'table table-responsive'>

						<table className = 'table'>

							<thead>

								<tr>

									<th> 

										Numero

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
										<td> {action.action} </td>

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