/**
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeIconWithBadge from './components/HomeIconWithBadge';
import DefaultApp from './DefaultApp';
import SQLite from 'react-native-sqlite-storage';
//import { throwStatement } from '@babel/types';


class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'People',
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {/* other code from before here */}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    constructor() {
        super();
        SQLite.enablePromise(true);
        this._db = SQLite.openDatabase({
            name: 'hookz.sqlite3',
            location: 'default',
            createFromLocation: 1, //'~www/hookz.db',
        })
            .then(db => {
                //this._db = db;
                console.log('**********Database open**********');
                db.transaction(tx => {
                    tx.executeSql(
                        'SELECT * FROM account;',
                        [],
                        (tx, results) => {
                            console.log('***********SQL Completed***********');
                            // console.log(results)
                            const rows = results.rows;
                            console.log(`Rows in table ${rows.length}`);
                        },
                    );
                });
            })
            .catch(error => {
                console.log(`**********Database Error********** ${error}`);
            });

        // this._db = SQLite.openDatabase(
        //   {
        //     name: 'hookz.db',
        //     location: 'default',
        //     createFromLocation: '~www/hookz.db',
        //   },
        //   () => {},
        //   error => {
        //     console.log(error);
        //   }
        // );

        console.log(`*******DB State ${this._db.state}`);

        // console.log("SQL Call");
        // this._db.transaction(tx => {
        //   tx.executeSql('SELECT * FROM user_account', [], (tx, results) => {
        //     const rows = results.rows;
        //     console.log(`Rows in table ${rows.length}`);
        //   })
        // });
    }

    static navigationOptions = {
        title: 'Settings',
    };

    componentDidMount() {
        console.log('***********SQL Call***********');
        // this._db.transaction(tx => {
        //   tx.executeSql('SELECT * FROM user_account;', [], (tx, results) => {
        //     console.log("***********SQL Completed***********");
        //     console.log(results)
        //     const rows = results.rows;
        //     console.log(`Rows in table ${rows.length}`);
        //   })
        // });
    }

    componentWillUnmount() {
        this._db.close();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* other code from before here */}
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Detailss')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {

    static navigationOptions = {
        title: 'Details',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
});



const tabNavigator = createBottomTabNavigator({
    Settings: SettingsScreen,
    Contacts: HomeScreen,
    Timeline: DefaultApp
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Contacts') {
                    //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    iconName = "ios-contacts";
                    // Sometimes we want to add badges to some icons. 
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`;
                } else if (routeName === "Timeline") {
                    iconName = `ios-time`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }
    });


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        paddingLeft: 10
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 120
    }
});

//const routes 

const getCurrentRoute = (navigationState) => {
    if (!navigationState) {
        return null
    } else if (!navigationState.routes) {
        return navigationState
    }

    const route = navigationState.routes[navigationState.index]
    if (route.routes) {
        return getCurrentRoute(route)
    }

    return route
}

const MainStack = createStackNavigator({
    Main: {
        screen: tabNavigator,
        navigationOptions: ({ navigation }) => {

            const navRoute = getCurrentRoute(navigation.state);
            console.log(navRoute.key)

            return {
                title: navRoute.key || "Hookz",
                headerRight: (
                    <View style={styles.iconContainer}>
                        <Ionicons name="ios-options" size={25} />
                        <Ionicons name="ios-options" size={25} />
                    </View>
                )
            };
        }
    },
    Details: DetailsScreen
});

// navigationOptions: ({navigation}) => { 
//   let title = 'Hookz';
//   return {
//     title: title,
//     headerRight: (
//       <View style={styles.iconContainer}>
//         <Ionicons name="ios-options" size={25} />
//         <Ionicons name="ios-options" size={25} />
//         {/* <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
//         <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-heart" : "md-heart"} />
//         <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-more" : "md-more"} /> */}
//       </View>
//     )
//   }
// }
// );

export default createAppContainer(MainStack);