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
import { increment, decrement, incrementAsync } from '../../reducers/actions/Counter';
import { toggle } from '../../reducers/actions/Signed';
import CounterNew from './CounterNew';

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

const Temp = () =>
{
    return (
        <Text style={styles.counter}>Hello</Text>
    )
}

const ComposedCounter = () =>
{
    //const counterState = useSelector(state => state.counter);
    const signed = useSelector(state => state.signed);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {signed ? <CounterNew></CounterNew> : <View></View>}

            <Button
                title={signed ? 'Hide' : 'Show'}
                onPress={() => dispatch(toggle())}>
            </Button>
        </View >
    );

    // return (
    //     // <View style={styles.container}>
    //     // <View style={styles.container}>
    //         {/* {
    //             signed ? <Counter /> : <View></View>
    //         }
    //         <View> */}
    //         <Counter />
    //         // <View>
    //         //     <Button
    //         //         title={signed ? 'Hide' : 'Show'}
    //         //         onPress={() => dispatch(toggle())}>
    //         //     </Button>
    //         // </View>
    //         {/* </View> */}
    //     // </View>
    // );
}

export default ComposedCounter;
