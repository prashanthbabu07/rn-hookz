import { createSwitchNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import Init from "../components/init/Init";
import OnBoarding from "../components/onboarding";
import Home from "../components/home/Home";
import React from "react";

const AppNavigator = createSwitchNavigator({
    init: Init,
    onboarding: OnBoarding,
    home: createStackNavigator({ Home })
});

export default createAppContainer(AppNavigator, { initialRouteName: "init" });