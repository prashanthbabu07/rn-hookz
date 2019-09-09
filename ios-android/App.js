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

// export default class App extends React.Component
// {
//     render()
//     {
//         return <AppContainer />;
//     }
// }

// const HomeScreen = () =>
// {
//     return (
//         <View>
//             <Text>HomeScreen</Text>
//         </View>
//     );
// }

// const SignInScreen = (props) =>
// {
//     return (
//         <View>
//             <Text>SignInScreen</Text>
//             <Button title="forgot" onPress={() => props.navigation.navigate("ForgotPassword")}></Button>
//         </View>
//     );
// }

// const ForgotPasswordScreen = () =>
// {
//     return (
//         <View>
//             <Text>ForgotPasswordScreen</Text>
//         </View>
//     );
// }

// const AuthenticationNavigator = createStackNavigator({
//     SignIn: SignInScreen,
//     ForgotPassword: ForgotPasswordScreen,
// });

// const AppNavigator = createSwitchNavigator({
//     /*
//      * Rather than being rendered by a screen component, the
//      * AuthenticationNavigator is a screen component
//      */
//     Auth: AuthenticationNavigator,
//     Home: HomeScreen,
// });

// const AppContainer = createAppContainer(AppNavigator);

export default App;