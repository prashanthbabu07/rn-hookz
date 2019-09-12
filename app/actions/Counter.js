import { ethers } from 'ethers';
import { AX_INCREMENT_COUNTER, AX_DECREMENT_COUNTER } from '../constants/CounterActionTypes';

export function increment()
{
    return {
        type: AX_INCREMENT_COUNTER
    };
}

export function decrement()
{
    return {
        type: AX_DECREMENT_COUNTER
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