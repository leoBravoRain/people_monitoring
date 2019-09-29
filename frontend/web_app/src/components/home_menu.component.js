import React, { Component } from "react";

import { BrowserRouter as Route, Link } from "react-router-dom";

export default class Home_Menu extends Component {

	render() {

		// console.log(this);

		return(

            <div className = 'container p-5'>

                <h2>

                    ¿Cuál es tu rol dentro de tu empresa?

                </h2>
                
                <p className = 'container'>

                    {/* <Link className ="btn btn-primary btn-block" to = { this.props.match.url.concat('work_env_manag_login')}> */}
                    <Link className = "btn btn-primary btn-block" to = { this.props.url_manager}>

                        Encargado de clima laboral
                            
                    </Link>

                </p>

                <p className = 'container'>

                    {/* <Link className ="btn btn-info btn-block" to = { this.props.match.url.concat('login_worker')}> */}
                    <Link className ="btn btn-info btn-block" to = { this.props.url_worker}>

                        Trabajador

                    </Link>

                </p>

            </div>
        
		);

	}

}