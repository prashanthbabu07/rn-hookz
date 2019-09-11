import { Platform } from "react-native";
import
{
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from "react-navigation";
import OnBoardingHome from "./OnboardingHome";
import OnBoardingRegistration from "./OnboardingRegistration";
import { ONBOARDING_HOME, ONBOARDING_SIGNUP } from "../../constants/RouteNames";

let routerConfig = {};
routerConfig[ONBOARDING_HOME] = {
    screen: OnBoardingHome,
    // headerMode: "none"
    navigationOptions: {
        header: null
    }
};

routerConfig[ONBOARDING_SIGNUP] = {
    screen: OnBoardingRegistration,
    // headerMode: "none"
    // headerMode: Platform.OS == "ios" ? "float" : "none"
}

const OnBoardingNavigation = createStackNavigator(routerConfig, {
    // headerMode: "none"
});

export default OnBoardingNavigation;