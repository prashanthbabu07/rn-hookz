import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { ONBOARDING_MAIN } from "../../constants/RouteNames";

const Home = (props) =>
{
    return (
        <View style={{justifyContent: "center", flex: 1, alignItems: "center"}}>
            <Text>Home</Text>
            <Button
                title="Onboarding"
                onPress={() => props.navigation.navigate(ONBOARDING_MAIN)}
                style={{
                    width: 200
                }}></Button>
        </View>
    );
}

export default Home;