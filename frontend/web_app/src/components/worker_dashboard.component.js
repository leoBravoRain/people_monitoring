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

					<Daily_Question area_id = {this.props.match.params.area_id}/>

					<Worker_Message area_id = {this.props.match.params.area_id}/>

				</div>
        
			</div>

		);

	}

}

export default Dashboard_Worker;