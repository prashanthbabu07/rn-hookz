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
import { APP_ROUTE_NAMES } from "../../AppRouteDefination";

type Props = {
    navigation: any
}

const OnBoardingHome = ({ navigation }: Props) => 
{
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center"
            }}>
                <Text style={styles.mainTitle}>Hookz</Text>
                <Text style={styles.subTitle}>a unified end-to-end encrypted collaboration platform.</Text>
            </View>
            <View style={styles.bottom}>
                <Button
                    title="Next"
                    style={styles.button}
                    onPress={() => navigation.navigate(APP_ROUTE_NAMES.onboarding.signup.name)}
                >
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#42A5F5"
    },
    subTitle: {
        fontSize: 16,
        padding: 20,
        textAlign: "center"
        // color: "darkslategrey"
    },
    bottom: {
        flex: 1,
        justifyContent: "flex-end",
        width: "80%",
        marginBottom: 36,
        paddingBottom: 36,
        alignItems: "center"
    },
    button: {
        width: 250,
    },
    text: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        color: "white"
    }
});

export default OnBoardingHome;