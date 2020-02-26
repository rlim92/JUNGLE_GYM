import { RECEIVE_USER_LOGOUT, 
        RECEIVE_CURRENT_USER,
        RECEIVE_USER_SIGN_IN
} from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      }
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      debugger
      localStorage.setItem("jwt", action.payload.data.token)
      return {
        ...state,
        isSignedIn: true,
        isAuthenticated: true
      };
    default:
      return state;
  }
}