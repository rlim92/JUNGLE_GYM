import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mSTP = state => ({
	loggedIn: state.session.isAuthenticated
})

const mDTP = dispatch => ({
	logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);