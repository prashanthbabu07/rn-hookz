import React from 'react';
import
{
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import userDefault from '../../services/sqlite/UserDefault';

const OnBoardingRegistration = () => 
{
    return (
        <View style={styles.container}>
            <Text>Place holder for input box {userDefault.get('SIGNED_UP')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default OnBoardingRegistration;