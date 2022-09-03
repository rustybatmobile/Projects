import lightStatusReducer from './reducers/lightStatusReducer';
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';

const store = createStore(lightStatusReducer, applyMiddleware(logger));

export default store;

