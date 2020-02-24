import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { set } from 'mongoose';

document.addEventListener("DOMContentLoaded", () => {
	let store;

	//check if user has session token stored in local storage
	if (localStorage.jwtToken) {
		//Set token as common header for all axios requests
		setAuthToken(localStorage.jwtToken);
		const decodedUser = jwt_decode(localStorage.jwtToken);
		const preloadedState = { session: { isAuthenticated: true, user: decodedUser }};
		store = configureStore(preloadedState);
		const currentTime = Date.now() / 1000; //Current time in seconds

		//if users token has expired
		if(decodedUser.exp < currentTime) {
			store.dispatch(logout());
			window.location.href = '/login';
		}
		} else {
			store = configureStore({});
	}

	const root = document.getElementById('root');
	ReactDOM.render(<Root store={store}/>, root)
})