import React from "react";
import
{
    View,
    Text,
    StyleSheet,
} from "react-native";

const Conversation = () => 
{
    return (
        <View style={styles.container}>
            <Text>List of contacts</Text>
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

export default Conversation;