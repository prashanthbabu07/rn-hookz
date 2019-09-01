import { createStore, combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import visibleReducer from './VisibleReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    signed: visibleReducer
});

export default allReducers;