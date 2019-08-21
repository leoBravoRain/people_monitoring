import React, { Component } from "react";

// import { BrowserRouter as Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

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

	};

	on_submit() {

		console.log("oaijsoia");

	};
	
	render() {

		console.log(this);

		return(

			<div className = 'container'>

				<form onSubmit={this.on_submit}>

		            <div className="form-group"> 

		                <label> Nombre: </label>

		                <input  type="text"
		                        className="form-control"
		                        value={this.state.todo_description}
		                        onChange={this.onChangeTodoDescription}
	                    />

		            </div>

		            <div className="form-group">

		                <label> Contraseña: </label>

		                <input 
		                        type="text" 
		                        className="form-control"
		                        value={this.state.todo_responsible}
		                        onChange={this.onChangeTodoResponsible}
	                    />

		            </div>

		            <div className="form-group">

		                <input type="submit" value = "Crear empresa" className="btn btn-primary" />

		            </div>

		        </form>

		    </div>

        );

	}

}

export default Create_New_Group;