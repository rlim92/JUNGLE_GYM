import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_api';
import { Switch, Route } from 'react-router-dom';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Workout from "./workout/workout_container";
import WorkoutFormContainer from "./profile/workout_form_container";

const App = () => {
	return (
	<Switch>
		<Route exact path="/" component={MainPage}/>
		<ProtectedRoute exact path="/workout" component={Workout}/>
		<Route exact path="/home" component={WorkoutFormContainer}/>
		<AuthRoute exact path="/login" component={LoginFormContainer}/>
		<AuthRoute eact path="/signup" component={SignupFormContainer}/>
	</Switch>
	)
};


export default App;