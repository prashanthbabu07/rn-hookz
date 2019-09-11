import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Init from "../views/init/Init";
import OnboardingNavigation from "./OnboardingNavigator";
import Home from "../views/home/Home";
import React from "react";
import { INIT_ROUTE, ONBOARDING_MAIN_ROUTE, APP_MAIN_ROUTE } from "../constants/RouteNames";


let routerConfig = {};

routerConfig[INIT_ROUTE] = Init;

routerConfig[ONBOARDING_MAIN_ROUTE] = OnboardingNavigation;

routerConfig[APP_MAIN_ROUTE] = createStackNavigator({ 
    home: {
        screen: Home,
        navigationOptions: {
            title: "Home"
        }
    }
 });

const AppNavigator = createSwitchNavigator(routerConfig);

export default createAppContainer(AppNavigator, { initialRouteName: INIT_ROUTE });