/**
 * @format
 * @flow
 */

import React, { useState, useEffect } from "react";
import
{
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Keyboard
} from "react-native";
import { Button } from "react-native-elements";
import userDefault from "../../services/sqlite/defaults/UserDefault";
import { USER_ONBOARDED } from "../../services/sqlite/defaults/keys";
import { APP_ROUTE_NAMES } from "../../AppRouteDefination";
import AsyncStorage from "@react-native-community/async-storage";
import { KV_IS_USER_ONBOARDED } from "./constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Props = {
    navigation: any
}

const OnBoardingRegistration = ({ navigation }: Props) => 
{
    const [enabled, setScrollEnabled] = useState(false);

    useEffect(() => 
    {
        const keyboardWillShow = Keyboard.addListener("keyboardWillShow", () => setScrollEnabled(true));
        const keyboardDidHide = Keyboard.addListener("keyboardDidHide", () => setScrollEnabled(false));
    });

    const register = async () =>
    {
        // const result = await AsyncStorage.setItem(KV_IS_USER_ONBOARDED, "false");
        navigation.navigate(APP_ROUTE_NAMES.home.name);
    }

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.keyboardAware}
            scrollEnabled={enabled}
            extraScrollHeight={10}>
            <View style={styles.container}>
                <Text>
                    Sign Up
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    autoCapitalize="none"
                    placeholderTextColor="white"
                // onChangeText={val => this.onChangeText("username", val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor="white"
                // onChangeText={val => this.onChangeText("password", val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    placeholderTextColor="white"
                // onChangeText={val => this.onChangeText("email", val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    autoCapitalize="none"
                    placeholderTextColor="white"
                // onChangeText={val => this.onChangeText("phone_number", val)}
                />
                <Button
                    style={styles.button}
                    title="Sign Up"
                    onPress={() => register()}
                />
            </View>
        </KeyboardAwareScrollView>
        // <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        // </KeyboardAvoidingView>
        // <KeyboardAvoidingView style={styles.container}>
        //     <TextInput
        //         style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        //         onChangeText={text => onChangeText(text)}
        //         value={value}
        //     />
        //     <Button
        //         title="Register"
        //         onPress={() => register()}
        //         style={styles.button}></Button>
        // </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 50,
        backgroundColor: "#42A5F5",
        margin: 10,
        padding: 8,
        color: "white",
        borderRadius: 14,
        fontSize: 18,
        fontWeight: "500",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: 300
    },
    keyboardAware: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    }
})

export default OnBoardingRegistration;