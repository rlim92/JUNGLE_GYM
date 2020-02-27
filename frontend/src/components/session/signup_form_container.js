import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import sessionForm from './session_form';
import { receiveSessionErrors } from "../../actions/session_actions";
import { clearErrors } from "../../actions/error_action";
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = state => ({
		signedIn: state.session.isSignedIn,
		errors: Object.values(state.errors.session),
		formType: "Signup",
		navLink: <Link to={'/login'}>Login</Link>,
		sessionText: "Have an account?",
		session: {
			email: "",
			username: "",
			password: "",
			password2: "",
		}
});

const mDTP = dispatch => ({
  action: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(sessionForm);