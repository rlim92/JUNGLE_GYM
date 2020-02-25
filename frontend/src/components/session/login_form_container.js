import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "login",
    session: {
      email: "",
      password: "",
      errors: {}
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);