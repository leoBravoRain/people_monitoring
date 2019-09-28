import React, { Component } from "react";

// make request to server
import {fs} from "../config/firebase";
import firebase from "firebase";

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

	// on submit function
	on_submit(calification) {

		// get current date
		// var currentdate = new Date(); 
		// var datetime =  currentdate.getDate() + "/"
		//                 + (currentdate.getMonth()+1)  + "/" 
		//                 + currentdate.getFullYear() + " "  
		//                 + currentdate.getHours() + ":"  
		//                 + currentdate.getMinutes() + ":" 
		//                 + currentdate.getSeconds();
		var datetime = firebase.firestore.Timestamp.now();

		// build body for post request
		const calification_ = {

			calification: calification,
			area: this.props.area_id,
			date: datetime
		};

		// post request
        // axios.post('http://192.168.1.9:4000/people_monitoring/add_daily_question/', calification_)
        // fs.collection('groups').doc(this.props.group_id).collection('areas').doc(this.props.area_id).collection("califications").add(calification_)
        fs.collection('groups').doc(this.props.group_id).collection('areas').doc(this.props.area_id).collection("califications").add(calification_)

        	// if ok
            .then(response => {

        		// console.log('Submit');
        		window.confirm("¡Gracias por hacernos saber!");

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

					Pregunta diaria
						
				</h4>

				<p className="alert alert-primary" role="alert">

	            	Con esta información, el encargado puede saber el estado de ánimo actual de toda el área, pudiendo mejorar la situación actual del ambiente laboral de tu área

	            </p>


				<div className = 'container'>

		            <div className="container"> 

		                <label> ¿Como te sientes hoy día en tu área de trabajo? </label>

					</div>
		                
	                <p className = 'container'>

		                <button onClick = {() => this.on_submit(-1)} type="button" className ="btn btn-danger btn-block"> 

							Mal

						</button>

	                    <button onClick = {() => this.on_submit(0)} type="button" className ="btn btn-warning btn-block"> 

							Normal

						</button>

						<button onClick = {() => this.on_submit(1)} type="button" className ="btn btn-primary btn-block"> 

							Bien

						</button>

					</p>

	            </div>

			</div>

		);

	}

}

export default Daily_Question;