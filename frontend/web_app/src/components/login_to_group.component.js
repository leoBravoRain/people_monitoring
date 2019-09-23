import React, { Component } from "react";

// make request to server
import axios from 'axios';
// import {fs} from "../config/firebase";
// import { BrowserRouter as Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

class Login_to_Group extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			group_id: '',
			password: '',
		}

		this.on_submit = this.on_submit.bind(this);
		this.on_change_input_group = this.on_change_input_group.bind(this);
		this.on_change_input_password = this.on_change_input_password.bind(this);

	};

	on_submit(event) {

		// prevent fomr reload page automatically
		event.preventDefault();

		// console.log(this);

		// this.props.history.push('/work_env_manag_home/dashboard_group/');

		// get request for get data
        axios.get('http://192.168.1.9:4000/people_monitoring/group/' + this.state.group_id + '/' + this.state.password)
        // fs.collection('groups').doc(this.state.group_id).collection('areas').get().then( snapshotquery => {

        	// if ok
            .then(response => {

            	// get data from API
            	const group = response.data;

            	// console.log(group);

            	// if response of server contain the group (response can be 0 or 1 of lenght)
            	if(group.length > 0) {

            		this.props.history.push('/work_env_manag_home/dashboard_group/' + this.state.group_id + '/' + group[0].name + '/');

            	}

            	else {

            		window.confirm('Ups, al parecer los ingresados no son correctos ¡Verifica que sean correctos!');

            	}


            })

            // if error
            .catch(function (error){

            	window.confirm('Ups, al parecer los ingresados no son correctos ¡Verifica que sean correctos!');
            	// dislpay error in console
                console.log(error);

            });

	};

	on_change_input_group(event) {

		this.setState({group_id : event.target.value})

	};
	
	on_change_input_password(event) {

		this.setState({password : event.target.value})

	};

	render() {

		return(

			<div className = 'container'>

				<h2>

					Ingresar a mi empresa

				</h2>

				<div class="alert alert-primary" role="alert">

					Si es que olvidaste el ID o contraseña de tu empresa, ponte en contacto con el administrador de la plataforma

				</div>

				<form onSubmit={this.on_submit}>

		            <div className="form-group"> 

		                <label> ID de la empresa: </label>

		                <input  type="text"
		                        className="form-control"
		                        value={this.state.group_id}
		                        onChange={this.on_change_input_group}
	                    />

		            </div>

		            <div className="form-group">

		                <label> Contraseña: </label>

		                <input 
		                        type="password" 
		                        className="form-control"
		                        value={this.state.password}
		                        onChange={this.on_change_input_password}
	                    />

		            </div>

		            <div className="form-group">

		                <input type="submit" value = "Ingresar" className="btn btn-primary btn-block" />

		            </div>

		        </form>

		    </div>

        );

	}

}

export default Login_to_Group;