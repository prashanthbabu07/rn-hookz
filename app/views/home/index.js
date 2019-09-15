/**
 * @format
 * @flow
 */

import React from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { ROUTE_SETTINGS, ROUTE_CONTACTS, ROUTE_MESSAGES, ROUTE_HOME_TAB, ROUTE_CONVERSATION } from "../../constants/RouteNames";
import Settings from "./Settings";
import Contacts from "./Contacts";
import Messages from "./Messages";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeIconWithBadge from "../../components/HomeIconWithBadge";
import Conversation from "./Conversation";

let routeHomeTabConfig = {};

routeHomeTabConfig[ROUTE_SETTINGS] = {
    screen: Settings,
    navigationOptions: {
        title: "Settings"
    }
}

routeHomeTabConfig[ROUTE_CONTACTS] = {
    screen: Contacts,
    navigationOptions: {
        title: "Contacts"
    }
}

routeHomeTabConfig[ROUTE_MESSAGES] = {
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
            if (routeName === ROUTE_CONTACTS)
            {
                //iconName = `ios-information-circle${focused ? "" : "-outline"}`;
                iconName = "ios-contacts";
                // Sometimes we want to add badges to some icons. 
                // You can check the implementation below.
                IconComponent = HomeIconWithBadge;
            }
            else if (routeName === ROUTE_SETTINGS)
            {
                iconName = `ios-options`;
            }
            else if (routeName === ROUTE_MESSAGES)
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
    initialRouteName: ROUTE_CONTACTS
});


let routeHomeStackConfig = {};
routeHomeStackConfig[ROUTE_HOME_TAB] = {
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

routeHomeStackConfig[ROUTE_CONVERSATION] = {
    screen: Conversation
}

const homeStacks = createStackNavigator(routeHomeStackConfig);

export default homeStacks;