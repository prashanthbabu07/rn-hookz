import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Init from "../components/init/Init";
import Onboarding from "../components/onboarding";
import Home from "../components/home/Home";
import React from "react";
import { INIT, ONBOARDING_MAIN, APP_MAIN } from "../constants/RouteNames";

let routerConfig = {};
routerConfig[INIT] = Init;
routerConfig[ONBOARDING_MAIN] = Onboarding;
routerConfig[APP_MAIN] = createStackNavigator({ Home });

const AppNavigator = createSwitchNavigator(routerConfig);
export default createAppContainer(AppNavigator, { initialRouteName: INIT });