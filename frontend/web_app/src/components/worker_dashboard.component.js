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

						Area de Operaciones de Calderas en empresa Future Inc.
							
					</h1>

					<Daily_Question />

					<Worker_Message />

				</div>
        
			</div>

		);

	}

}

export default Dashboard_Worker;