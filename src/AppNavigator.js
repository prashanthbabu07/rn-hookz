import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Init from "./features/AppInit";
import OnboardingStack from "./features/Onboarding";
import Home from "./features/AppHome";
import React from "react";
import { APP_ROUTE_NAMES } from "./AppRouteDefination";


let routerConfig = {
    [APP_ROUTE_NAMES.init.name]: Init,
    [APP_ROUTE_NAMES.onboarding.name]: OnboardingStack,
    [APP_ROUTE_NAMES.home.name]: Home
};

const AppNavigator = createSwitchNavigator(routerConfig);

export default createAppContainer(AppNavigator, { initialRouteName: APP_ROUTE_NAMES.init.name });