import { combineReducers } from 'redux';
import post from './post';

const reducers = combineReducers({
	postReducer: post
})

export default reducers;
