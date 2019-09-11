import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Init from "../views/init/Init";
import OnboardingStack from "../views/onboarding";
import Home from "../views/home";
import React from "react";
import { INIT_ROUTE, ONBOARDING_MAIN_ROUTE, HOME_ROUTE } from "../constants/RouteNames";


let routerConfig = {};

routerConfig[INIT_ROUTE] = Init;

routerConfig[ONBOARDING_MAIN_ROUTE] = OnboardingStack;

routerConfig[HOME_ROUTE] = Home;

// createStackNavigator({
//     home: {
//         screen: Home,
//         navigationOptions: {
//             title: "Home"
//         }
//     }
// });

const AppNavigator = createSwitchNavigator(routerConfig);

export default createAppContainer(AppNavigator, { initialRouteName: INIT_ROUTE });