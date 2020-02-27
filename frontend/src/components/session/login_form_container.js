import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { receiveSessionErrors } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_action';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors.session),
    formType: "Login",
    navLink: <Link to={'/signup'}>Sign up here</Link>,
    session: {
      email: "",
      password: ""
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    login: user => dispatch(login(user))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);