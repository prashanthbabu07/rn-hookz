/**
 * @format
 * @flow
 */

import React, {
    Component,
    useState,
    useEffect
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
import { increment, decrement, incrementAsync, generateKeyPair } from '../../actions/Counter';
// import { toggle } from '../../reducers/actions/UserOnboarding';
// import { Counter as Temps } from './Counter';

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

const CounterNew = () =>
{
    const counterState = useSelector(state => state.counter);
    // const signed = useSelector(state => state.signed);
    const dispatch = useDispatch();

    useEffect(() =>
    {
        console.log('************useEffect')
        const onEnd = () => 
        {
            console.log('********* onEnd');
        }

        return () =>
        {
            onEnd();
        }
    });


    return (
        <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-around' }}>
            <Button title="+" style={styles.counter}
                onPress={() => dispatch(increment())}>
            </Button>
            <Text style={styles.counter}>{counterState.counter}</Text>
            <Button title="-" style={styles.counter}
                onPress={() => dispatch(decrement())}>
            </Button>
            <Button title="+Async" style={styles.counter}
                onPress={() => dispatch(incrementAsync())}>
            </Button>
            <Button title="Key" style={styles.counter}
                onPress={() => dispatch(generateKeyPair())}>
            </Button>
        </View>
    )
}


export default CounterNew;
