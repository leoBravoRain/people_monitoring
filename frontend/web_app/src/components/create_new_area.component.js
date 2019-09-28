import React, { Component } from "react";

// import { BrowserRouter as Link } from "react-router-dom";

// import Control_Risk from "./control_risk_list.component";

// make request to server
// import axios from 'axios';
import {fs, auth} from "../config/firebase";

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
	
	componentDidMount() {

		// check login
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

		// prevent default
		event.preventDefault();
		

		// post request
        // // axios.post('http://192.168.1.9:4000/people_monitoring/add_area/', area)
        // const ref = fs.collection('groups').doc(this.props.match.params.group_id).collection('areas');
        // const a_doc = ref.doc();

        // console.log(fs.createId());

		// build body for post request
		const area = {

			name: this.state.name,
			group: this.props.match.params.group_id,
			// date: fs.ServerValue.TIMESTAMP
			// id: a_doc.id,

		};


		// ref.add(area)
        fs.collection('groups').doc(this.props.match.params.group_id).collection('areas').add(area)

        	// if ok
            .then(response => {

        		// console.log('Submit');
        		window.confirm("¡El área ha sido creada exitosamente!");

        		// redirect to other path
        		const url = '/work_env_manag_home/dashboard_group/';
        		// this.props.history.push(url.concat(this.props.match.params.group_id, '/',this.props.match.params.group_name, '/'));
				this.props.history.push(url.concat(this.props.match.params.group_id, '/',this.props.match.params.group_name));

            })

            // if error
            .catch(function (error){

            	// user message
            	window.confirm('Ups, tuvimos un problema, ¡vuelve a intentarlo mas tarde!');
            	// dislpay error in console
                console.log(error);

            });


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

				<div className="alert alert-primary" role="alert">

					Esto creará un área dentro de la empresa

				</div>
				
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