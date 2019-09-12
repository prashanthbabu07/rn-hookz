import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Init from "../views/init/Init";
import OnboardingStack from "../views/onboarding";
import Home from "../views/home";
import React from "react";
import { ROUTE_INIT, ROUTE_ONBOARDING_STACK, ROUTE_HOME_STACK } from "../constants/RouteNames";


let routerConfig = {};

routerConfig[ROUTE_INIT] = Init;

routerConfig[ROUTE_ONBOARDING_STACK] = OnboardingStack;

routerConfig[ROUTE_HOME_STACK] = Home;

// createStackNavigator({
//     home: {
//         screen: Home,
//         navigationOptions: {
//             title: "Home"
//         }
//     }
// });

const AppNavigator = createSwitchNavigator(routerConfig);

export default createAppContainer(AppNavigator, { initialRouteName: ROUTE_INIT });