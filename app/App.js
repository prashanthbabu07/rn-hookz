/**
 * @format
 * @flow
 */

import React, { Component, useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./reducers";
import AppNavigator from "./navigations/AppNavigator";

const App = () => 
{
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

export default App;