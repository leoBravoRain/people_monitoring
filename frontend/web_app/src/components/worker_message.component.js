import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

class Worker_Message extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			// name: null,
			// password: null,
		}

		this.on_submit = this.on_submit.bind(this);
		this.on_submit_message = this.on_submit_message.bind(this);

	};

	on_submit() {

		// console.log('Submit');
		window.confirm("¡Gracias por hacernos saber!");
		// this.props.history.push('/work_env_manag_home/dashboard_group/');

	};

	on_submit_message() {

		window.confirm("¡Tu mensaje ha sido enviado correctamente!");

	}

	render() {

		return(

			<div className = 'container'>

				<h4>

					Mensaje anónimo a encargado de clima laboral de tu área
						
				</h4>

	            <form onSubmit={this.on_submit_message}>

		            <div className="form-group"> 

		                <label> Mensaje: </label>

		                <input  type="text"
		                        className="form-control"
		                        value = {this.state.name}
		                        onChange={this.handleChange}
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