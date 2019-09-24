import React, { Component } from "react";

// make request to server
// import axios from 'axios';
// import { BrowserRouter as Link } from "react-router-dom";
import {fs} from "../config/firebase";

// import Control_Risk from "./control_risk_list.component";

class Login_Worker extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			area_id: '',
			group_id: '',
			// password: '',
		}

		this.on_submit = this.on_submit.bind(this);
		this.on_change_input_area = this.on_change_input_area.bind(this);
		this.on_change_input_group = this.on_change_input_group.bind(this);

		// this.on_change_input_password = this.on_change_input_password.bind(this);

	};

	on_submit(event) {

		// prevent fomr reload page automatically
		event.preventDefault();

		// get request for get data
		// axios.get('http://192.168.1.9:4000/people_monitoring/area/' + this.state.area_id + '/')
        fs.collection('groups').doc(this.state.group_id).collection("areas").doc(this.state.area_id).get().then( doc => {

			// if doc exist
			if(doc.exists) {

				// check password
				if(doc.data().password == this.state.password){

					console.log("data correct!");

					this.props.history.push('/dashboard_worker/' + this.state.group_id + "/" + this.state.area_id + '/' + doc.data().name);

				}

				else {

					window.confirm('Ups, al parecer la contraseña no es correcta ¡Verificala!');

				}

			} 

			else {

				window.confirm('Ups, al parecer los ingresados no son correctos ¡Verifica que sean correctos!');

			}

            })

            // if error
            .catch(function (error){

            	console.log("asjidoa");
            	
            	window.confirm('Ups, al parecer los ingresados no son correctos ¡Verifica que sean correctos!');
            	// dislpay error in console
                console.log(error);

            });

	};

	on_change_input_area(event) {

		this.setState({area_id : event.target.value})

	};

	on_change_input_group(event) {

		this.setState({group_id : event.target.value})

	};
	
	render() {

		return(

			<div className = 'container'>

				<h2>

					Ingresar a mi área de trabajo

				</h2>

				<div class="alert alert-primary" role="alert">

					Recuerda pedirle el ID de tu empresa y el ID de tu área de trabajo al encargado de clima laboral de tu empresa

				</div>

				<form onSubmit={this.on_submit}>

    	            <div className="form-group"> 

    	                <label> ID del grupo: </label>

    	                <input  type="text"
    	                        className="form-control"
    	                        value={this.state.group_id}
    	                        onChange={this.on_change_input_group}
                        />

    	            </div>

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