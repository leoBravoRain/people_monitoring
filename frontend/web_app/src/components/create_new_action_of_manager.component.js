import React, { Component } from "react";

// make request to server
import {fs} from "../config/firebase";
import firebase from "firebase";

// google analytics
import {initGA, Event_GA} from "../config/google_analytics";

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

	componentDidMount() {

		// init google analytics
		initGA();
		
	}
	
	// on submit form
	on_submit_action(event) {

		// prevent default
		event.preventDefault();
		
		// get current date
		// var currentdate = new Date(); 
		// var datetime =  currentdate.getDate() + "/"
		//                 + (currentdate.getMonth()+1)  + "/" 
		//                 + currentdate.getFullYear() + " "  
		//                 + currentdate.getHours() + ":"  
		//                 + currentdate.getMinutes() + ":" 
		//                 + currentdate.getSeconds()
		var datetime = firebase.firestore.Timestamp.now();

		// build body for post request
		const action_ = {

			description: this.state.action,
			area: this.props.match.params.area_id,
			date: datetime,
		};


		// post request
	    // axios.post('http://192.168.1.9:4000/people_monitoring/add_message_from_worker/', message_)
	    fs.collection('groups').doc(this.props.match.params.group_id).collection('areas').doc(this.props.match.params.area_id).collection("actions_of_manager").add(action_)

	    	// if ok
	        .then(response => {

	    		// console.log('Submit');
	    		// window.confirm("¡Tu mensaje ha sido enviado correctamente!");

            	// user messsage
        		window.confirm("¡Se ha creado correctamente!");

				// add event to google analutics
				Event_GA("Manager", "add new action", "new action");
				
        		// redirect to dashboard
        		const url_base = '/work_env_manag_home/dashboard_group/';
        		const url = url_base.concat(this.props.match.params.group_id, '/', this.props.match.params.group_name, '/dashboard_area/', this.props.match.params.area_id, '/', this.props.match.params.area_name);
				this.props.history.push(url);
	        })

	        // if error
	        .catch(function (error){

	        	// user message
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