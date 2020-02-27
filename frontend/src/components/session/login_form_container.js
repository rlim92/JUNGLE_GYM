import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { receiveSessionErrors } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_action';

const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors.session),
    formType: "Login",
    session: {
      email: "",
      password: ""
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);