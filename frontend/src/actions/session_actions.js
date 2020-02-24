import * as ApiUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

//action 
export const logoutUser = () => ({
	type: RECEIVE_USER_LOGOUT
})

//thunk action 
export const logout = () => dispatch => {
	localStorage.removeItem('jwtToken')
	ApiUtil.setAuthToken(false)
	dispatch(logoutUser())
};

