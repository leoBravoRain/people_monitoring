import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

import Daily_Question from "./daily_question.component";
import Worker_Message from './worker_message.component';


class Dashboard_Worker extends Component {

	render() {

	// console.log(this);

		return(

			<div className = 'container'>

				<div className = 'container'>

					<h1>

						Area: {this.props.match.params.area_name}
							
					</h1>

					<div class="alert alert-success" role="alert">

						Puedes estar tranquilo, ya que toda esta información es totalmente ANÓNIMA, por lo que nadie jamás sabrá quien envía esta información

					</div>

					<div class="alert alert-success" role="alert">

						<Daily_Question group_id = {this.props.match.params.group_id} area_id = {this.props.match.params.area_id}/>

					</div>

					<div class="alert alert-success" role="alert">

						<Worker_Message group_id = {this.props.match.params.group_id} area_id = {this.props.match.params.area_id}/>

					</div>
					
				</div>
        
			</div>

		);

	}

}

export default Dashboard_Worker;