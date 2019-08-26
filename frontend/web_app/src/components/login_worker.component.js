import React, { Component } from "react";

// make request to server
import axios from 'axios';
// import { BrowserRouter as Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

class Login_Worker extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			area_id: '',
			// password: '',
		}

		this.on_submit = this.on_submit.bind(this);
		this.on_change_input_area = this.on_change_input_area.bind(this);
		// this.on_change_input_password = this.on_change_input_password.bind(this);

	};

	on_submit(event) {

		// prevent fomr reload page automatically
		event.preventDefault();

		// console.log(this);

		// this.props.history.push('/work_env_manag_home/dashboard_group/');

		// get request for get data
        axios.get('http://192.168.1.9:4000/people_monitoring/area/' + this.state.area_id + '/')

        	// if ok
            .then(response => {

            	// get data from API
            	var area = response.data;

            	// console.log(area);

            	this.props.history.push('/dashboard_worker/' + this.state.area_id + '/' + area.name);

            })

            // if error
            .catch(function (error){

            	window.confirm('Ups, al parecer el área ingresada no es correcta ¡Verifica que sea correcta!');
            	// dislpay error in console
                console.log(error);

            });

	};

	on_change_input_area(event) {

		this.setState({area_id : event.target.value})

	};
	
	// on_change_input_password(event) {

	// 	this.setState({password : event.target.value})

	// };

	render() {

		return(

			<div className = 'container'>

				<h2>

					Ingresar a mi área de trabajo

				</h2>

				<div class="alert alert-primary" role="alert">

					Recuerda pedirle el ID de tu área de trabajo al encargado de clima laboral de tu empresa

				</div>

				<form onSubmit={this.on_submit}>

		            <div className="form-group"> 

		                <label> ID del área: </label>

		                <input  type="text"
		                        className="form-control"
		                        value={this.state.area_id}
		                        onChange={this.on_change_input_area}
	                    />

		            </div>

		            {/*
		            <div className="form-group">

		                <label> Contraseña: </label>

		                <input 
		                        type="text" 
		                        className="form-control"
		                        value={this.state.password}
		                        onChange={this.on_change_input_password}
	                    />

		            </div>

		        	*/}

		            <div className="form-group">

		                <input type="submit" value = "Ingresar" className="btn btn-primary btn-block" />

		            </div>

		        </form>

		    </div>

        );

	}

}

export default Login_Worker;