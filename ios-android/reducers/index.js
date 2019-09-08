import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './CounterReducer';
import userOnboardingReducer from './UserOnboardingReducer';
import thunk from 'redux-thunk';
import logger from '../middlewares/Logger';
import signalr from '../middlewares/SignalR';
import crashReporter from '../middlewares/CrashReporter';

const combinedReducers = combineReducers({
    counter: counterReducer,
    onboarding: userOnboardingReducer
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