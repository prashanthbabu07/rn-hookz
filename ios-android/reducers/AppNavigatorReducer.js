import AppNavigator from "../navigations/AppNavigator";

const initAction = AppNavigator.router.getActionForPathAndParams("init");
const onboardingAction = AppNavigator.router.getActionForPathAndParams("onboarding");
const home = AppNavigator.router.getActionForPathAndParams("home");

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams("init")
);

const appNavigatorReducer = (state = initialState, action) =>
{
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}

export default appNavigatorReducer;