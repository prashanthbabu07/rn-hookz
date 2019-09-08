/**
 * @format
 * @flow
 */

import React, { Component, useEffect } from 'react';
import ComposedCounter from './components/counter/ComposedCounter';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './reducers';
import DocumentSigner from './experiments/webviews/DocumentSigner';
import OnBoardingNavigation from './components/onboarding/OnBoarding';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { getUserOnboardingState } from './reducers/actions/UserOnboarding';
import
{
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator,
} from 'react-navigation';
import OnBoardingHome from './components/onboarding/OnBoardingHome';



const Loading = (props) => 
{

    const onboardingState = useSelector(state => state.onboarding);
    const dispatcher = useDispatch();
    useEffect(() => 
    {
        dispatcher(getUserOnboardingState());
    });

    return (<View>
        <ActivityIndicator></ActivityIndicator>
    </View>);
}

const Initilizing = createStackNavigator({
    Loading: Loading
});

const Home = createStackNavigator({
    Settings: ComposedCounter
});

const AppNavigator = createSwitchNavigator({
    Loading: Loading,
    Home: ComposedCounter,
    Onboarding: OnBoardingNavigation
}, {
    initialRouteName: "Loading"
});


const Main = () =>
{
    const onboardingState = useSelector(state => state.onboarding);
    const dispatcher = useDispatch();
    useEffect(() => 
    {
        dispatcher(getUserOnboardingState());
    });

    if (onboardingState.isLoading)
    {
        return (
            createAppContainer(Initilizing)
        );
    }

    if (onboardingState.isOnboarded)
    {
        return (createAppContainer(Home))
    }

    return (<OnBoardingNavigation></OnBoardingNavigation>);
}

const App = () => 
{
    return (
        <Provider store={store}>
            {/* <View style={styles.container}>
                <ActivityIndicator size="large" color="royalblue"></ActivityIndicator>
            </View> */}
            <OnBoardingHome></OnBoardingHome>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})

export default App;