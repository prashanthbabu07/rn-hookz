import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './CounterReducer';
import visibleReducer from './VisibleReducer';
import thunk from 'redux-thunk';
import logger from '../middlewares/Logger';
import signalr from '../middlewares/SignalRMiddleware';

const allReducers = combineReducers({
    counter: counterReducer,
    signed: visibleReducer
});

const store = createStore(allReducers, applyMiddleware(thunk, logger, signalr('https://api.chilzin.com/messages')));

export default store;