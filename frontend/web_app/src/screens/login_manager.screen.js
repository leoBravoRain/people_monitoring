import React, { Component } from "react";

// make request to server
import axios from 'axios';
import {fs, auth} from "../config/firebase";

class Manager_Login extends Component {

	// constructor
	constructor(props) {

		// constructur of parent
		super(props);

		// initial states
		this.state = {

			email: '',
			password: '',
		}

		this.on_submit = this.on_submit.bind(this);
		this.on_change_input_email = this.on_change_input_email.bind(this);
		this.on_change_input_password = this.on_change_input_password.bind(this);
		this.on_create_user = this.on_create_user.bind(this);

	};

	componentDidMount() {

		auth.onAuthStateChanged((user) => {

		    if (user) {

		      console.log("user logged");

		      this.props.history.push('/work_env_manag_home/');

		    } 

		    else {

		    	console.log("user not logged");
		    }

	  	});
	}

	on_create_user(event) {

		// console.log("register");

		event.preventDefault();

		const email = this.state.email;
		const password = this.state.password;

		// console.log(this);
		auth.createUserWithEmailAndPassword(email, password)

		.then(res => {

			// console.log("user created!");

			this.props.history.push('/work_env_manag_home/');

		})
		.catch(function(error) {

			console.log(error.code)

		});

	}

	on_submit(event) {

		console.log("login");

		// prevent fomr reload page automatically
		event.preventDefault();

		const email = this.state.email;
		const password = this.state.password;

		// console.log(this);
		auth.signInWithEmailAndPassword(email, password)

		.then(res => {

			console.log("user logged!");

			console.log(res);

			// this.props.history.push(url.concat(this.props.match.params.group_id, '/',this.props.match.params.group_name, '/'));

			this.props.history.push('/work_env_manag_home/');


		})

		.catch(function(error) {

			console.log(error.code);

			window.confirm('Ups, al parecer los datos no son correctos ¡Verificalos!');

		});


		// // get request for get data
  //       // axios.get('http://192.168.1.9:4000/people_monitoring/group/' + this.state.email + '/' + this.state.password)
  //       fs.collection('groups').doc(this.state.email).get().then( doc => {

  //       	// // if ok
  //           // .then(response => {
  //        	// console.log(doc);

		// 	// if doc exist
		// 	if(doc.exists) {

		// 		// check password
		// 		if(doc.data().password == this.state.password){

		// 			this.props.history.push('/work_env_manag_home/dashboard_group/' + this.state.email + '/' + doc.data().name + '/');

		// 		}

		// 		else {

		// 			window.confirm('Ups, al parecer la contraseña no es correcta ¡Verificala!');

		// 		}

		// 	} 

		// 	else {

		// 		window.confirm('Ups, al parecer los ingresados no son correctos ¡Verifica que sean correctos!');

		// 	}
  //           	// // get data from API
  //           	// const group = response.data;

  //           	// // console.log(group);

  //           	// // if response of server contain the group (response can be 0 or 1 of lenght)
  //           	// if(group.length > 0) {

  //           	// 	this.props.history.push('/work_env_manag_home/dashboard_group/' + this.state.email + '/' + group[0].name + '/');

  //           	// }

  //           	// else {

  //           	// 	window.confirm('Ups, al parecer los ingresados no son correctos ¡Verifica que sean correctos!');

  //           	// }


  //           })

  //           // if error
  //           .catch(function (error){

  //           	window.confirm('Ups, al parecer los ingresados no son correctos ¡Verifica que sean correctos!');
  //           	// dislpay error in console
  //               console.log(error);

  //           });

	};

	on_change_input_email(event) {

		this.setState({email : event.target.value})

	};
	
	on_change_input_password(event) {

		this.setState({password : event.target.value})

	};

	render() {

		return(

			<div className = 'container'>

				<h2>

					Ingresar a mi cuenta

				</h2>

				<form onSubmit={this.on_submit}>

		            <div className="form-group"> 

		                <label> Email </label>

		                <input  type="text"
		                        className="form-control"
		                        value={this.state.email}
		                        onChange={this.on_change_input_email}
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

		                <input type="submit" id = "login" value = "Ingresar" className="btn btn-primary btn-block" />

		            </div>

		            <div className="form-group">

		                <button onClick = {this.on_create_user} className="btn btn-secondary btn-block"> 

		                	Registrarme 

		                </button>

		            </div>

		        </form>

		    </div>

        );

	}

}

export default Manager_Login;