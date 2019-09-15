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
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";
import userDefault from "../../services/sqlite/defaults/UserDefault";
import { USER_ONBOARDED } from "../../services/sqlite/defaults/keys";
import { APP_ROUTE_NAMES } from "../../constants/RouteNames";
import AsyncStorage from "@react-native-community/async-storage";
import { KV_IS_USER_ONBOARDED } from "../../constants/UserDefaults";

type Props = {
    navigation: any
}

const OnBoardingRegistration = ({ navigation }: Props) => 
{

    const [value, onChangeText] = React.useState('Useless Placeholder');

    const register = async () =>
    {
        const result = await AsyncStorage.setItem(KV_IS_USER_ONBOARDED, "false");
        navigation.navigate(APP_ROUTE_NAMES.home.name);
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Username'
                autoCapitalize="none"
                placeholderTextColor='white'
                // onChangeText={val => this.onChangeText('username', val)}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor='white'
                // onChangeText={val => this.onChangeText('password', val)}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                autoCapitalize="none"
                placeholderTextColor='white'
                // onChangeText={val => this.onChangeText('email', val)}
            />
            <TextInput
                style={styles.input}
                placeholder='Phone Number'
                autoCapitalize="none"
                placeholderTextColor='white'
                // onChangeText={val => this.onChangeText('phone_number', val)}
            />
            <Button
                title='Sign Up'
            // onPress={this.signUp}
            />
        </KeyboardAvoidingView>
        // <KeyboardAvoidingView style={styles.container}>
        //     <TextInput
        //         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
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
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default OnBoardingRegistration;