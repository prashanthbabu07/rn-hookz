/**
 * @format
 * @flow
 */

import React, {
    Component,
    useState
} from 'react';
import
{
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, toggle } from './CounterActions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counter: {
        fontSize: 20
    }
});

const Counter = () =>
{
    const counter = useSelector(state => state.counter);
    const signed = useSelector(state => state.signed);
    console.log('*************', counter);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {signed ?
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <Button
                        title="Increase" style={styles.counter}
                        onPress={() => dispatch(increment())}
                    >
                    </Button>
                    <Text style={styles.counter}>{counter}</Text>
                    <Button
                        title="Decrease" style={styles.counter}
                        onPress={() => dispatch(decrement())}
                    >
                    </Button>
                </View> : <View></View>
            }
            <View>
                <Button
                    title={signed ? 'Hide' : 'Show'}
                    onPress={() => dispatch(toggle())}
                >
                </Button>
            </View>
        </View>
    );
}

export default Counter;
