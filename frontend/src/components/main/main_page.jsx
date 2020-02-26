import React from 'react';
import NavBarContainer from '../nav/navbar_container';

class MainPage extends React.Component {
	render() {
		return (
			<div className="main-page-container">
				<div className="main-nav-container">

					<div>
						<h1>Welcome to the Jungle Gym</h1>
					</div>

					<div className="nav-bar-container">
						<NavBarContainer/>
					</div>
					
				</div>
			</div>
		);
	}
}

export default MainPage;