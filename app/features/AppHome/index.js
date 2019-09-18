/**
 * @format
 * @flow
 */

import React from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import { APP_ROUTE_NAMES } from "../../AppRouteDefination";
import Settings from "../Settings";
import Contacts from "../ContactList";
import Messages from "../Messages";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeIconWithBadge from "../../components/HomeIconWithBadge";
import Conversation from "../Conversation";
import { View, Text, Image } from "react-native";

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
    navigationOptions: ({ navigation }) =>
    {
        const { routeName } = navigation.state.routes[navigation.state.index]
        console.log(routeName);
        let title = APP_ROUTE_NAMES.home.mainTab.contacts.title;

        if (routeName === APP_ROUTE_NAMES.home.mainTab.contacts.name)
        {
            return {
                // title: APP_ROUTE_NAMES.home.mainTab.contacts.title,
                headerTitle: (
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: "center"
                    }}>
                        <Image
                            resizeMode="cover"
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 10
                            }}
                            source={{
                            uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
                        }}></Image>
                    <Text style={{
                        flex: 1,
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#53799d',
                        textAlign: 'center'
                    }}>
                        Test</Text></View>),
            headerRight: (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: 120
                }}>
                    <Ionicons name="ios-options" size={25} />
                    <Ionicons name="ios-options" size={25} />
                </View>
            )
        }
    }

        if(routeName === APP_ROUTE_NAMES.home.mainTab.settings.name)
{
    return {
        title: APP_ROUTE_NAMES.home.mainTab.settings.title
    }
}

if (routeName === APP_ROUTE_NAMES.home.mainTab.messages.name)
{
    return {
        title: APP_ROUTE_NAMES.home.mainTab.messages.title
    }
}

return {
    title: "Hookz"
};
    }
};

routeHomeStackConfig[APP_ROUTE_NAMES.home.conversation.name] = {
    screen: Conversation
}

const homeStacks = createStackNavigator(routeHomeStackConfig);

export default homeStacks;