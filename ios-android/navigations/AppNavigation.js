import AppNavigator from "./AppNavigator";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const AppNavigation = (props) =>
{
    const navigationState = useSelector(state => state.navigationReducer);
    const dispatch = useDispatch();

    return (
        <AppNavigator navigation={{ dispatch, state: navigationState }}></AppNavigator>
    );
}

export default AppNavigation;