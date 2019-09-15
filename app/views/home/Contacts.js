/**
 * @format
 * @flow
 */

import React from "react";
import
{
    View,
    Text,
    StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";
import { APP_ROUTE_NAMES } from "../../constants/RouteNames";

type Props = {
    navigation: any
};

const Contacts = ({ navigation }: Props) => 
{
    return (
        <View style={styles.container}>
            <Text>List of contacts</Text>
            <Button title="Conversation" onPress={() => navigation.navigate(APP_ROUTE_NAMES.home.conversation.name)}></Button>
        </View >
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