/**
 * @format
 * @flow
 */

import React from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { APP_ROUTE_NAMES } from "../../constants/RouteNames";
import Settings from "./Settings";
import Contacts from "./Contacts";
import Messages from "./Messages";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeIconWithBadge from "../../components/HomeIconWithBadge";
import Conversation from "./Conversation";

let routeHomeTabConfig = {};

routeHomeTabConfig[APP_ROUTE_NAMES.home.mainTab.settings.name] = {
    screen: Settings,
    navigationOptions: {
        title: "Settings"
    }
}

routeHomeTabConfig[APP_ROUTE_NAMES.home.mainTab.contacts.name] = {
    screen: Contacts,
    navigationOptions: {
        title: "Contacts"
    }
}

routeHomeTabConfig[APP_ROUTE_NAMES.home.mainTab.messages.name] = {
    screen: Messages,
    navigationOptions: {
        title: "Messages"
    }
}



const tabNavigator = createBottomTabNavigator(routeHomeTabConfig, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) =>
        {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === APP_ROUTE_NAMES.home.mainTab.contacts.name)
            {
                //iconName = `ios-information-circle${focused ? "" : "-outline"}`;
                iconName = "ios-contacts";
                // Sometimes we want to add badges to some icons. 
                // You can check the implementation below.
                IconComponent = HomeIconWithBadge;
            }
            else if (routeName === APP_ROUTE_NAMES.home.mainTab.settings.name)
            {
                iconName = `ios-options`;
            }
            else if (routeName === APP_ROUTE_NAMES.home.mainTab.messages.name)
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
    initialRouteName: APP_ROUTE_NAMES.home.mainTab.contacts.name
});


let routeHomeStackConfig = {};
routeHomeStackConfig[APP_ROUTE_NAMES.home.mainTab.name] = {
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
};

routeHomeStackConfig[APP_ROUTE_NAMES.home.conversation.name] = {
    screen: Conversation
}

const homeStacks = createStackNavigator(routeHomeStackConfig);

export default homeStacks;