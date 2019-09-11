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
import { HOME_ROUTE } from "../../constants/RouteNames";
import AsyncStorage from "@react-native-community/async-storage";
import { IS_USER_ONBOARDED } from "../../constants/UserDefaults";

const OnBoardingRegistration = ({ navigation }) => 
{

    const register = async () =>
    {
        const result = await AsyncStorage.setItem(IS_USER_ONBOARDED, "true");
        navigation.navigate(HOME_ROUTE);
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