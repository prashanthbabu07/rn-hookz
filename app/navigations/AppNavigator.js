import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Init from "../features/AppInit";
import OnboardingStack from "../features/Onboarding";
import Home from "../features/AppHome";
import React from "react";
import { APP_ROUTE_NAMES } from "../constants/RouteNames";


let routerConfig = {};

routerConfig[APP_ROUTE_NAMES.init.name] = Init;

routerConfig[APP_ROUTE_NAMES.onboarding.name] = OnboardingStack;

routerConfig[APP_ROUTE_NAMES.home.name] = Home;

// createStackNavigator({
//     home: {
//         screen: Home,
//         navigationOptions: {
//             title: "Home"
//         }
//     }
// });

const AppNavigator = createSwitchNavigator(routerConfig);

export default createAppContainer(AppNavigator, { initialRouteName: APP_ROUTE_NAMES.init.name });