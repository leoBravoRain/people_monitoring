import React, { Component } from "react";

// make request to server
import axios from 'axios';

import {fs, auth} from "../config/firebase";

class Create_New_Group extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			name: null,
			password: null,
		}

		this.on_submit = this.on_submit.bind(this);
		this.on_change_input_name = this.on_change_input_name.bind(this);
		this.on_change_input_password = this.on_change_input_password.bind(this);


	};

	componentDidMount() {

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
	}

	on_submit(event) {

		// console.log(this);

		// prevent default
		event.preventDefault();
		
		// build body for post request
		const group = {

			name: this.state.name,
			password: this.state.password,

		};

		// post request
        // axios.post('http://192.168.1.9:4000/people_monitoring/add_group/', group)
        fs.collection('groups').add(group)
        	// if ok
            .then(ref => {

            	// const group = ref.data;
            	// console.log("group added in: ", ref.id);
            	// console.log(ref.data);

        		// console.log('Submit');
        		window.confirm("¡La empresa ha sido creada exitosamente!");

        		// // redirect to other path
        		const url = '/work_env_manag_home/dashboard_group/';
        		this.props.history.push(url.concat(ref.id, '/', group.name + '/'));

            })

            // if error
            .catch(function (error){

            	// user message
            	window.confirm('Ups, tuvimos un problema, ¡vuelve a intentarlo mas tarde!');
            	// dislpay error in console
                console.log(error);

            });

		// this.props.history.push('/work_env_manag_home/dashboard_group/');

	};

	on_change_input_name(event) {

		this.setState({name : event.target.value})

	};
	
	on_change_input_password(event) {

		this.setState({password : event.target.value})

	};
	
	render() {

		// console.log(this);

		return(

			<div className = 'container'>

				<h2>

					Crear nueva empresa para monitorear

				</h2>

				<div className="alert alert-danger" role="alert">

					Recuerda la contraseña que ingresaste, ya que debes escribirla cada vez que quieras ingresar al perfil de tu empresa

				</div>

				<form onSubmit={this.on_submit}>

		            <div className="form-group"> 

		                <label> Nombre: </label>

		                <input  type="text"
		                        className="form-control"
		                        value={this.state.name}
		                        onChange={this.on_change_input_name}
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

		                <input type="submit" value = "Crear empresa" className="btn btn-primary btn-block" />

		            </div>

		        </form>

		    </div>

        );

	}

}

export default Create_New_Group;