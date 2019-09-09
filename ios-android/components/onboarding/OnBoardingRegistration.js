import React from "react";
import
{
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import userDefault from "../../services/sqlite/defaults/UserDefault";
import { USER_ONBOARDED } from "../../services/sqlite/defaults/keys";

const OnBoardingRegistration = (props) => 
{

    const register = async () =>
    {
        const result = await userDefault.set(USER_ONBOARDED, "true");
        props.navigation.navigator("home");
    }

    return (
        <View style={styles.container}>
            <Text>Place holder for input box</Text>
            <Button title="Register" onPress={() => register()}></Button>
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

export default OnBoardingRegistration;