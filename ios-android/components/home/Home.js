import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

const Home = (props) =>
{
    return (
        <View>
            <Text>Home</Text>
            <Button title="Onboarding" onPress={() => props.navigation.navigate("onboarding")}></Button>
        </View>
    );
}

export default Home;