import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import mainPageCSS from './_main_page.css'
import Footer from '../footer/footer';

class MainPage extends React.Component {
	render() {
		return (
			<div className="main-page-container">
				<div className="nav-bar-container">
					<NavBarContainer/>
				</div>
				<div className="merge-container">
				<div className="photo-container">
					<div className="left-div">No gym? No problem! Get a great workout with JungleGym. We provide the location and workouts. You put in the work. </div>
					<div className="right-div"></div>
				</div>
					<Footer/>
				</div>
	
			</div>
		);
	}
}

export default MainPage;