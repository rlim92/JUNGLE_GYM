import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//Need to create root reducer to import it
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
	createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(thunk, logger) 
	)
);

export default configureStore;