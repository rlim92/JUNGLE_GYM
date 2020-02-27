import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import mainPageCSS from './_main_page.css'

class MainPage extends React.Component {
	render() {
		return (
			<div className="main-page-container">
				<div className="nav-bar-container">
					<NavBarContainer/>
				</div>

				<div className="photo-container">
					<img className="splash-photo" src="https://images.unsplash.com/photo-1553012547-284d8c582b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
				</div>

				<div className="footer-container">

				</div>

			</div>
		);
	}
}

export default MainPage;