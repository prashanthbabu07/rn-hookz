import { View, ActivityIndicator, Button } from "react-native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { getUserOnboardingState } from "../../actions/UserOnboarding";
import { useDispatch, useSelector } from "react-redux";
import { USER_ONBOARDED } from "../../services/sqlite/defaults/keys";
import userDefault from "../../services/sqlite/defaults/UserDefault";
import { APP_MAIN, ONBOARDING_MAIN } from "../../constants/RouteNames";

const Init = (props) => 
{
    const getOnboardingState = async () =>
    {
        const result = await userDefault.get(USER_ONBOARDED);
        let userOnboarded = result == undefined ? false : result == "true";
        props.navigation.navigate(userOnboarded ? APP_MAIN : ONBOARDING_MAIN);
    }

    useEffect(() =>
    {
        setTimeout(() =>
        {
            getOnboardingState();
        }, 2000);
    });

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="royalblue"></ActivityIndicator>
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