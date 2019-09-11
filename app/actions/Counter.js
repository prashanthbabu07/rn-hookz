import { ethers } from 'ethers';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/CounterActionTypes';

export function increment()
{
    return {
        type: INCREMENT_COUNTER
    };
}

export function decrement()
{
    return {
        type: DECREMENT_COUNTER
    };
}

export function incrementAsync(delay = 1000)
{
    return (dispatch) =>
    {
        setTimeout(() =>
        {
            dispatch(increment());
        }, delay);
    };
}

export function generateKeyPair()
{
    return async dispatch => 
    {
        
    };
}