import React from 'react';
import
{
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';

const OnBoarding = () => 
{
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
                <Text style={styles.mainTitle}>Hookz</Text>
                <Text style={styles.subTitle}>a unified end to end encrypted collaboration platform</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Next</Text>
                </TouchableOpacity>
                {/* <Button title="Next"></Button> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'steelblue'
    },
    subTitle: {
        fontSize: 16,
        padding: 20,
        textAlign: 'center'
        // color: 'darkslategrey'
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '80%'
    },
    button: {
        height: 50,
        marginBottom: 36,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'steelblue'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'whitesmoke'
    }
});

export default OnBoarding;