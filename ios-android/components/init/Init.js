import { View, ActivityIndicator, Button } from "react-native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { getUserOnboardingState } from "../../reducers/actions/UserOnboarding";
import { useDispatch, useSelector } from "react-redux";
import { USER_ONBOARDED } from "../../reducers/actions/UserOnboarding";
import userDefault from "../../services/sqlite/UserDefault";

const Init = (props) => 
{
    const getOnboardingState = async () =>
    {
        const result = await userDefault.get(USER_ONBOARDED);
        let onboardedState = result == undefined ? false : result == "true";
        props.navigation.navigate(onboardedState ? "home" : "onboarding");
    }

    useEffect(() =>
    {
        getOnboardingState();
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