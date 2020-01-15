//reducer
import { combineReducers, createStore } from 'redux';
import weather from './weather';

const rootReducer = combineReducers({ weather });

export default rootReducer;
