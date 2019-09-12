import { Platform } from "react-native";
import
{
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from "react-navigation";
import OnBoardingHome from "./OnboardingHome";
import OnBoardingRegistration from "./OnboardingRegistration";
import { ROUTE_ONBOARDING_HOME, ROUTE_ONBOARDING_SIGNUP } from "../../constants/RouteNames";

let routerConfig = {};

routerConfig[ROUTE_ONBOARDING_HOME] = {
    screen: OnBoardingHome,
    // headerMode: "none"
    navigationOptions: {
        header: null
    }
};

routerConfig[ROUTE_ONBOARDING_SIGNUP] = {
    screen: OnBoardingRegistration,
    // headerMode: "none"
    // headerMode: Platform.OS == "ios" ? "float" : "none"
}

const OnboardingStack = createStackNavigator(routerConfig, {
    // headerMode: "none"
});

export default OnboardingStack;