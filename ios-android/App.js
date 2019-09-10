/**
 * @format
 * @flow
 */

import React, { Component, useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './reducers';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AppNavigator from './navigations/AppNavigator';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import { Button } from 'react-native-elements';

const App = () => 
{
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

export default App;