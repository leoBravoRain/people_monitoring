import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

class Daily_Question extends Component {

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

	};

	on_submit() {

		// console.log('Submit');
		window.confirm("¡Gracias por hacernos saber!");
		// this.props.history.push('/work_env_manag_home/dashboard_group/');

	};

	render() {

		return(

			<div className = 'container'>

				<h4>

					Pregunta diaria
						
				</h4>

				<form onSubmit={this.on_submit}>

		            <div className="form-group"> 

		                <label> ¿Como te sientes hoy día en tu área de trabajo? </label>

					</div>
		                
	                <div className = 'form-group'>

		                <input  type="submit"
		                        value = "Mal" 
		                        className="btn btn-danger btn-block"
	                    />

	                    <input  type="submit"
		                        value = "Normal" 
		                        className="btn btn-warning btn-block"
	                    />

	                    <input  type="submit"
		                        value = "Bien" 
		                        className="btn btn-info btn-block"
	                    />

		            </div>

		        </form>



        
			</div>

		);

	}

}

export default Daily_Question;