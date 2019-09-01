/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Counter from './components/Counter';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, TOGGLE } from './components/CounterActions';
import allReducer from './reducers';

const store = createStore(allReducer);

export default class App extends Component
{
    render()
    {
        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        )
    }
}


