import React, { Component } from "react";

import Daily_Question from "../../components/daily_question.component";
import Worker_Message from '../../components/worker_message.component';

class Dashboard_Worker_Demo extends Component {

	render() {

		return(

			<div className = 'container'>

				<div className = 'container'>

					<h1>

						Area: {this.props.match.params.area_name}
							
					</h1>

					<div className="alert alert-success" role="alert">

						Puedes estar tranquilo, ya que toda esta información es totalmente <b>ANÓNIMA</b>, por lo que nadie jamás sabrá quien envía esta información

					</div>

					<div className="alert alert-success" role="alert">

						<Daily_Question demo = {true} group_id = {this.props.match.params.group_id} area_id = {this.props.match.params.area_id}/>

					</div>

					<div className="alert alert-success" role="alert">

						<p className="container">

							<button className="btn btn-info btn-block" type="button" data-toggle="collapse" data-target="#collapse" aria-expanded="false" aria-controls="collapse">

								Enviar mensaje anonimo a encargado de clima laboral

							</button>
							
						</p>

						<div className="collapse" id="collapse">

							<Worker_Message group_id = {this.props.match.params.group_id} area_id = {this.props.match.params.area_id}/>

						</div>

					</div>
					
				</div>
        
			</div>

		);

	}

}

export default Dashboard_Worker_Demo;