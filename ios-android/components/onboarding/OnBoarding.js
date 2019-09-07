import { Platform } from 'react-native';
import
{
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';
import OnBoardingHome from './OnBoardingHome';
import OnBoardingRegistration from './OnBoardingRegistration';

const OnBoardingNavigation = createStackNavigator({
    Home: {
        screen: OnBoardingHome,
        // headerMode: 'none'
        navigationOptions: {
            header: null
        }
    },
    Registration: {
        screen: OnBoardingRegistration,
        // headerMode: 'none'
        // headerMode: Platform.OS == 'ios' ? 'float' : 'none'
    }
}, {
    // headerMode: 'none'
});

export default createAppContainer(OnBoardingNavigation);