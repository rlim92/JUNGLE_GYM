import React from 'react';
import { Link } from 'react-router-dom';
import navBarCSS from './_navbar.css'

class NavBar extends React.Component {
	constructor(props) {
		super(props)
		this.logoutUser = this.logoutUser.bind(this);
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	getLinks() {
		if (this.props.loggedIn) {
			return (
				<div className="loggedInNavLinks">
					<Link className="splash-links" to={'/home'}>Home</Link>
					<a className="splash-links" onClick={this.logoutUser}>Logout</a>
				</div>
			);
		} else {
			return (
				<div className="loggedOutNavLinks">
					<Link className="splash-links" to={'/signup'}>Signup</Link>
					<Link className="splash-links" to={'/login'}>Login</Link>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="navBar">
				<div className="navBar-right">
					<h1><Link className="navBar-title" to={'/home'}>JungleGym</Link></h1>
					{/* <h1 className="navBar-title">JungleGym</h1> */}
				</div>

				<div className="navBar-mid">

				</div>

				<div className="navBar-links">
					{ this.getLinks() }
				</div>
			
			</div>
		)
	}
}

export default NavBar;