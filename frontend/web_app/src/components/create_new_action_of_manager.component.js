import React, { Component } from "react";

import { BrowserRouter as Link } from "react-router-dom";

// make request to server
import axios from 'axios';

class Manager_Action extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			action: '',
			// password: null,
		}

		this.on_submit_action = this.on_submit_action.bind(this);
		this.handle_change = this.handle_change.bind(this);
	};

	// handle change in input text
	handle_change(event) {

		// update state
		this.setState({

			action: event.target.value

		});

	};

	// on submit form
	on_submit_action(event) {

		// prevent default
		event.preventDefault();
		
		// build body for post request
		const action_ = {

			description: this.state.action,
			area: this.props.match.params.area_id,
		};

		// console.log(action_);

		// post request
        axios.post('http://192.168.1.9:4000/people_monitoring/add_action_of_manager/', action_)

        	// if ok
            .then(response => {

            	// user messsage
        		window.confirm("¡Se ha creado correctamente!");

        		// redirect to dashboard
        		const url_base = '/work_env_manag_home/dashboard_group/';
        		const url = url_base.concat(this.props.match.params.group_id, '/', this.props.match.params.group_name, '/dashboard_area/', this.props.match.params.area_id, '/', this.props.match.params.area_name);
				this.props.history.push(url);

            })

            // if error
            .catch(function (error){

            	// user action
            	window.confirm('Ups, tuvimos un problema, ¡vuelve a intentarlo mas tarde!');
            	// dislpay error in console
                console.log(error);

            });

	};

	render() {

		return(

			<div className = 'container'>

				<h4>

					Crear acción del área
						
				</h4>

				<p className="alert alert-primary" role="alert">

					Con tu información, el encargado de clima laboral puede saber con más detalle el estado actual del ambiente laboral. Puedes informarle por ejemplo, alguna experiencia negativa/positiva con algún compañero o jefe del área.

				</p>

	            <form onSubmit={this.on_submit_action}>

		            <div className="form-group"> 

		                <label> Acción: </label>

		                <textarea  type="text"
		                        className="form-control"
		                        value = {this.state.action}
		                        onChange={this.handle_change}
	                    />

		            </div>

		            <div className="form-group">

		                <input type="submit" 
	                			value = "Crear acción" 
	                			className="btn btn-primary btn-block" 
            			/>

		            </div>

		        </form>

			</div>

		);

	}

}

export default Manager_Action;