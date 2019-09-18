/**
 * @format
 * @flow
 */

import React, { useEffect } from "react";
import
{
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator
} from "react-native";
import { Button, ListItem } from "react-native-elements";
import { APP_ROUTE_NAMES } from "../../AppRouteDefination";
import { readPhoneContacts } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { incrementAsync } from "../Counter/actions";

type Props = {
    navigation: any
};

const Contacts = ({ navigation }: Props) => 
{

    const contactListState = useSelector(state => state.contactList);
    // const counterState = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const list = Object.keys(contactListState.byId).map(k => contactListState.byId[k]);
    console.log("Listed---->", list);

    // const list = [
    //     {
    //         givenName: 'Amy Farha',
    //         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    //         jobTitle: 'Vice President'
    //     },
    //     {
    //         givenName: 'Chris Jackson',
    //         avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    //         jobTitle: 'Vice Chairman'
    //     }
    // ];

    useEffect(() =>
    {
        dispatch(readPhoneContacts());
    }, [contactListState.fetching]);

    // const keyExtractor = (contact) => contact.recordID.toString();
    const keyExtractor = contact => contact.recordID;

    const renderItem = ({ item }) => (
        <ListItem
            title={item.givenName}
            subtitle={item.jobTitle}
            id
            // leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            chevron
            badge={{ value: 300, textStyle: { color: "white" }, containerStyle: { marginTop: -20 } }}
            onPress={() => navigation.navigate(APP_ROUTE_NAMES.home.conversation.name)}
        />
    );

    return (
        contactListState.fetching ?
            <View>
                <ActivityIndicator></ActivityIndicator>
                {/* <Text>{counterState.counter}</Text> */}
                <Button title="Async+" onPress={() => dispatch(incrementAsync())}></Button>
            </View>
            :
            <FlatList
                keyExtractor={keyExtractor}
                data={list}
                renderItem={renderItem}></FlatList>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default Contacts;