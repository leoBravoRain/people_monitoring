import React, { Component } from "react";

// import { BrowserRouter as Route, Link } from "react-router-dom";

import Home_Menu from "../../components/home_menu.component";

class Demo_Home extends Component {

	render() {

		return(

			<div className = 'container'>

				<Home_Menu 
					url_manager = {this.props.match.url.concat('work_env_manag_login')} 
					url_worker = {this.props.match.url.concat('/worker_dashboard')}
				/>

			</div>

		);

	}

}

export default Demo_Home;