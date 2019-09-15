import { Platform } from "react-native";
import
{
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from "react-navigation";
import OnBoardingHome from "./OnboardingHome";
import OnBoardingRegistration from "./OnboardingRegistration";
import { APP_ROUTE_NAMES } from "../../constants/RouteNames";

let routerConfig = {};

routerConfig[APP_ROUTE_NAMES.onboarding.home.name] = {
    screen: OnBoardingHome,
    // headerMode: "none"
    navigationOptions: {
        header: null
    }
};

routerConfig[APP_ROUTE_NAMES.onboarding.signup.name] = {
    screen: OnBoardingRegistration,
    // headerMode: "none"
    // headerMode: Platform.OS == "ios" ? "float" : "none"
}

const OnboardingStack = createStackNavigator(routerConfig, {
    // headerMode: "none"
});

export default OnboardingStack;