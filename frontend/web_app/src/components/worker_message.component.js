import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

// make request to server
import axios from 'axios';

class Worker_Message extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			message: '',
			// password: null,
		}

		this.on_submit_message = this.on_submit_message.bind(this);
		this.handle_change = this.handle_change.bind(this);
	};

	// handle change in input text
	handle_change(event) {

		// update state
		this.setState({

			message: event.target.value

		});

	};

	// on submit form
	on_submit_message(event) {

		// prevent default
		event.preventDefault();
		
		// build body for post request
		const message_ = {

			message: this.state.message,
			area: this.props.area_id,
		};

		// post request
        axios.post('http://192.168.1.9:4000/people_monitoring/add_message_from_worker/', message_)

        	// if ok
            .then(response => {

        		// console.log('Submit');
        		window.confirm("¡Tu mensaje ha sido enviado correctamente!");

            })

            // if error
            .catch(function (error){

            	// user message
            	window.confirm('Ups, tuvimos un problema, ¡vuelve a intentarlo mas tarde!');
            	// dislpay error in console
                console.log(error);

            });

	};

	render() {

		return(

			<div className = 'container'>

				<h4>

					Mensaje anónimo a encargado de clima laboral de tu área
						
				</h4>

				<p className="alert alert-primary" role="alert">

					Con tu información el encargado de clima laboral puede saber con más detalle el estado actual del ambiente laboral. Puedes informarle por ejemplo, alguna experiencia negativa/positiva con algún compañero o jefe del área.

				</p>

	            <form onSubmit={this.on_submit_message}>

		            <div className="form-group"> 

		                <label> Mensaje: </label>

		                <textarea  type="text"
		                        className="form-control"
		                        value = {this.state.message}
		                        onChange={this.handle_change}
	                    />

		            </div>

		            <div className="form-group">

		                <input type="submit" 
	                			value = "Enviar mensaje anónimo" 
	                			className="btn btn-primary btn-block" 
            			/>

		            </div>

		        </form>

			</div>

		);

	}

}

export default Worker_Message;