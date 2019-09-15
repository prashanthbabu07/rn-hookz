import { View, ActivityIndicator, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { getUserOnboardingState } from "../../actions/UserOnboarding";
import { useDispatch, useSelector } from "react-redux";
import userDefault from "../../services/sqlite/defaults/UserDefault";
import { APP_ROUTE_NAMES } from "../../constants/RouteNames";
import { KV_IS_USER_ONBOARDED } from "../../constants/UserDefaults";

const Init = ({ navigation }) => 
{
    const getOnboardingState = async () =>
    {
        const value = await AsyncStorage.getItem(KV_IS_USER_ONBOARDED);
        navigation.navigate(value == "true" ? APP_ROUTE_NAMES.home.name : APP_ROUTE_NAMES.onboarding.name);
    }

    useEffect(() =>
    {
        setTimeout(() =>
        {
            getOnboardingState();
        }, 500);
    });

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#007AFF"></ActivityIndicator>
            {/* <Button title="Goto Onboarding" onPress={() => props.navigation.navigate("onboarding")}></Button> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})

export default Init;