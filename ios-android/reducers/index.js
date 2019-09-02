import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './CounterReducer';
import signedReducer from './SignedReducer';
import thunk from 'redux-thunk';
import logger from '../middlewares/Logger';
import signalr from '../middlewares/SignalR';
import crashReporter from '../middlewares/CrashReporter';

const combinedReducers = combineReducers({
    counter: counterReducer,
    signed: signedReducer
});

const store = createStore(
    combinedReducers,
    applyMiddleware(
        logger,
        crashReporter,
        thunk,
        signalr('https://api.chilzin.com/messages')
    )
);

export default store;