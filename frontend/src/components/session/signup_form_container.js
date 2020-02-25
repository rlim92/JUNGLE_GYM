import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import sessionForm from './session_form';

const mSTP = state => ({
		signedIn: state.session.isSignedIn,
		errors: state.errors.session
});

const mDTP = dispatch => ({
	signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(sessionForm);