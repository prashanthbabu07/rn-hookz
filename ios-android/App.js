/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Counter from './components/Counter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { INCREMENT_COUNTER, DECREMENT_COUNTER, TOGGLE } from './reducers/actions/Counter';
import store from './reducers';

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


