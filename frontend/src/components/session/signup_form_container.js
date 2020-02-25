import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import sessionForm from './session_form';

const mSTP = state => ({
		signedIn: state.session.isSignedIn,
		errors: state.errors.session,
		formType: "signup",
		session: {
			email: "",
			username: "",
			password: "",
			password2: "",
			errors: {}
		}
});

const mDTP = dispatch => ({
	action: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(sessionForm);