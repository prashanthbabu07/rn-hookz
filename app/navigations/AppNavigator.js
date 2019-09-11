import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Init from "../views/init/Init";
import OnboardingNavigation from "./OnboardingNavigator";
import Home from "../views/home/Home";
import React from "react";
import { INIT, ONBOARDING_MAIN, APP_MAIN } from "../constants/RouteNames";


let routerConfig = {};

routerConfig[INIT] = Init;

routerConfig[ONBOARDING_MAIN] = OnboardingNavigation;

routerConfig[APP_MAIN] = createStackNavigator({ 
    home: {
        screen: Home,
        navigationOptions: {
            title: "Home"
        }
    }
 });

const AppNavigator = createSwitchNavigator(routerConfig);

export default createAppContainer(AppNavigator, { initialRouteName: INIT });