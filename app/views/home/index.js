import React from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { SETTINGS_ROUTE, CONTACTS_ROUTE, MESSAGES_ROUTE } from "../../constants/RouteNames";
import Settings from "./Settings";
import Contacts from "./Contacts";
import Messages from "./Messages";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeIconWithBadge from "../../components/HomeIconWithBadge";
import Conversation from "./Conversation";

let routeConfig = {};

routeConfig[SETTINGS_ROUTE] = {
    screen: Settings,
    navigationOptions: {
        title: "Settings"
    }
}

routeConfig[CONTACTS_ROUTE] = {
    screen: Contacts,
    navigationOptions: {
        title: "Contacts"
    }
}

routeConfig[MESSAGES_ROUTE] = {
    screen: Messages,
    navigationOptions: {
        title: "Messages"
    }
}

const tabNavigator = createBottomTabNavigator(routeConfig, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) =>
        {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === CONTACTS_ROUTE)
            {
                //iconName = `ios-information-circle${focused ? "" : "-outline"}`;
                iconName = "ios-contacts";
                // Sometimes we want to add badges to some icons. 
                // You can check the implementation below.
                IconComponent = HomeIconWithBadge;
            }
            else if (routeName === SETTINGS_ROUTE)
            {
                iconName = `ios-options`;
            }
            else if (routeName === MESSAGES_ROUTE)
            {
                iconName = `ios-time`;
            }

            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: "#007AFF",
        inactiveTintColor: "gray",
    },
    initialRouteName: CONTACTS_ROUTE
});


const mainStack = createStackNavigator({
    HOME_MAIN_TAB: {
        screen: tabNavigator,
        // navigationOptions: ({ navigation }) =>
        // {

        //     const navRoute = getCurrentRoute(navigation.state);
        //     console.log(navRoute.key)

        //     return {
        //         title: navRoute.key || "Hookz",
        //         headerRight: (
        //             <View style={styles.iconContainer}>
        //                 <Ionicons name="ios-options" size={25} />
        //                 <Ionicons name="ios-options" size={25} />
        //             </View>
        //         )
        //     };
        // }
    },
    CONVERSATION_ROUTE: Conversation
});

export default mainStack;