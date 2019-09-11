import { Platform } from "react-native";
import
{
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from "react-navigation";
import OnBoardingHome from "./OnboardingHome";
import OnBoardingRegistration from "./OnboardingRegistration";
import { ONBOARDING_HOME_ROUTE, ONBOARDING_SIGNUP_ROUTE } from "../../constants/RouteNames";

let routerConfig = {};

routerConfig[ONBOARDING_HOME_ROUTE] = {
    screen: OnBoardingHome,
    // headerMode: "none"
    navigationOptions: {
        header: null
    }
};

routerConfig[ONBOARDING_SIGNUP_ROUTE] = {
    screen: OnBoardingRegistration,
    // headerMode: "none"
    // headerMode: Platform.OS == "ios" ? "float" : "none"
}

const OnboardingStack = createStackNavigator(routerConfig, {
    // headerMode: "none"
});

export default OnboardingStack;