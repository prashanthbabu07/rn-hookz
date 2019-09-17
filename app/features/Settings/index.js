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
    TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import userDefault from "../../services/sqlite/defaults/UserDefault";
import { USER_ONBOARDED } from "../../services/sqlite/defaults/keys";
import { HOME_ROUTE } from "../../constants/RouteNames";
import AsyncStorage from "@react-native-community/async-storage";
import { IS_USER_ONBOARDED } from "../../constants/UserDefaults";

const Settings = () => 
{
    return (
        <View style={styles.container}>
            <Text>Settings Screen</Text>
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

export default Settings;