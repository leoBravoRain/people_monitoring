import React, { Component } from "react";

// import { BrowserRouter as Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

class Create_New_Area extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			name: '',
			// password: null,
		}

		this.on_submit = this.on_submit.bind(this);
		this.handleChange = this.handleChange.bind(this);

	};

	on_submit() {

		// console.log(this);

		this.props.history.push('/work_env_manag_home/dashboard_group/dashboard_area/'.concat(this.state.name));

	};

	handleChange(event) {

		this.setState({name: event.target.value});

  	}
	
	render() {

		return(

			<div className = 'container'>

				<h2>

					Crear nueva area

				</h2>
				
				<form onSubmit={this.on_submit}>

		            <div className="form-group"> 

		                <label> Nombre: </label>

		                <input  type="text"
		                        className="form-control"
		                        value = {this.state.name}
		                        onChange={this.handleChange}
	                    />

		            </div>

		            <div className="form-group">

		                <input type="submit" value = "Crear area" className="btn btn-primary" />

		            </div>

		        </form>

		    </div>

        );

	}

}

export default Create_New_Area;