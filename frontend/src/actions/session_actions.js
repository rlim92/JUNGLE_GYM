import * as ApiUtil from '../util/session_api';
import jwt_decode from 'jwt-decode';


export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_SIGN_IN = 'RECEIVE_USER_SIGN_IN';

//action 
export const logoutUser = () => ({
	type: RECEIVE_USER_LOGOUT
})

export const receiveCurrentUser = currentUser => ({
	type: RECEIVE_CURRENT_USER,
	currentUser
})

export const receiveUserSignIn = payload => ({
	type: RECEIVE_USER_SIGN_IN,
	payload
})

export const receiveSessionErrors = errors => ({
	type: RECEIVE_SESSION_ERRORS,
	errors
})

//thunk action 
export const logout = () => dispatch => {
	localStorage.removeItem('jwtToken')
	ApiUtil.setAuthToken(false)
	dispatch(logoutUser())
};

export const signup = user => dispatch => (
	ApiUtil.signup(user)
		.then(payload => dispatch(receiveUserSignIn(payload)),
		err => dispatch(receiveSessionErrors(err.response.data)))
);

export const login = user => dispatch => (
	ApiUtil.login(user).then(res => {
		const { token } = res.data;
		localStorage.setItem('jwtToken', token);
		ApiUtil.setAuthToken(token);
		const decoded = jwt_decode(token);
		dispatch(receiveCurrentUser(decoded))
	})
	.catch(err => dispatch(receiveSessionErrors(err.response.data)))
)

