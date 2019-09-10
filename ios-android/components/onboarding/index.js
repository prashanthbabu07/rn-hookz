import { Platform } from "react-native";
import
{
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from "react-navigation";
import OnBoardingHome from "./OnboardingHome";
import OnBoardingRegistration from "./OnboardingRegistration";

const OnBoardingNavigation = createStackNavigator({
    Home: {
        screen: OnBoardingHome,
        // headerMode: "none"
        navigationOptions: {
            header: null
        }
    },
    Registration: {
        screen: OnBoardingRegistration,
        // headerMode: "none"
        // headerMode: Platform.OS == "ios" ? "float" : "none"
    }
}, {
    // headerMode: "none"
});

export default OnBoardingNavigation;