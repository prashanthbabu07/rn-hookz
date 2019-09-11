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
import { APP_MAIN } from "../../constants/RouteNames";

const OnBoardingRegistration = ({ navigation }) => 
{

    const register = async () =>
    {
        const result = await userDefault.set(USER_ONBOARDED, "true");
        navigation.navigate(APP_MAIN);
    }

    return (
        <View style={styles.container}>
            <Text>Place holder for input box</Text>
            <Button
                title="Register"
                onPress={() => register()}
                style={styles.button}></Button>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        width: 200
    }
});

export default OnBoardingRegistration;