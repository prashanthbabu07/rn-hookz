import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './features/Counter/reducer';
import userOnboardingReducer from './features/OnboardingRegistration/reducer';
import thunk from 'redux-thunk';
import loggerMiddleware from './middlewares/LoggerMiddleware';
import signalr from './middlewares/SignalrMiddleware';
import crashReporterMiddleware from './middlewares/CrashReporterMiddleware';
// import AppNavigatorReducer from "./AppNavigatorReducer";
import signalrConfig from "./configs/SignalrConfig";
import constactListReducer from './features/ContactList/reducer';

const combinedReducers = combineReducers({
    counter: counterReducer,
    contactList: constactListReducer
    //onboarding: userOnboardingReducer
});

const store = createStore(
    combinedReducers,
    applyMiddleware(
        loggerMiddleware,
        crashReporterMiddleware,
        thunk,
        // signalr(signalrConfig.api)
    )
);

export default store;