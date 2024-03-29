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
import { increment, decrement, incrementAsync } from '../../actions/Counter';
import { toggle } from '../../actions/UserOnboarding';

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
    //const counterState = useSelector(state => state.counter);
    //const signed = useSelector(state => state.signed);
    //const dispatch = useDispatch();

    return (
        // <Text style={styles.counter}>{counterState.counter}</Text>
        <Text style={styles.counter}>Test 0</Text>
    );

    // return (
    //     // <View style={styles.container}>
    //     <View style={{ flexDirection: 'row', width: 300, justifyContent: 'space-around' }}>
    //         {/* <Button
    //             title="+" style={styles.counter}
    //             onPress={() => dispatch(increment())}>
    //         </Button> */}
    //         <Text style={styles.counter}>{counterState.counter}</Text>
    //         {/* <Button
    //             title="-" style={styles.counter}
    //             onPress={() => dispatch(decrement())}>
    //         </Button>
    //         <Button
    //             title="+Async" style={styles.counter}
    //             onPress={() => dispatch(incrementAsync())}>
    //         </Button> */}
    //     </View>
    //     // {/* <View>
    //     //     <Button
    //     //         title={signed ? 'Hide' : 'Show'}
    //     //         onPress={() => dispatch(toggle())}>
    //     //     </Button>
    //     // </View> */}
    //     // </View>
    // );
}

export default Counter;
