import React from "react";
import
{
    View,
    Text,
    StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";
import { CONVERSATION_ROUTE } from "../../constants/RouteNames";

const Contacts = ({ navigation }) => 
{
    return (
        <View style={styles.container}>
            <Text>List of contacts</Text>
            <Button title="Conversation" onPress={() => navigation.navigate(CONVERSATION_ROUTE)}></Button>
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