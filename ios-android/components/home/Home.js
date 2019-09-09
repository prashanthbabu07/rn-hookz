import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

const Home = (props) =>
{
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={() => props.navigation.navigate("OnBoardingHome")}></Button>
        </View>
    );
}

export default Home;