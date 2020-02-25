import * as ApiUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';
import JwtDecode from 'jwt-decode';

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

export const receiveUserSignIn = () => ({
	type: RECEIVE_USER_SIGN_IN
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

export const signUp = user => dispatch => (
	ApiUtil.signup(user)
		.then(() => dispatch(receiveUserSignIn())),
		err => dispatch(receiveSessionErrors(err.response.data))
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

