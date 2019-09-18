/**
 * @format
 * @flow
 */

import { ethers } from 'ethers';
import { AX_INCREMENT_COUNTER, AX_DECREMENT_COUNTER } from './constants';

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

export function incrementAsync(delay: number = 1000)
{
    console.log("incrementAsync");
    return (dispatch: any) =>
    {
        setTimeout(() =>
        {
            dispatch(increment());
        }, delay);
    };
}

export function generateKeyPair()
{
    return async (dispatch: any) => 
    {

    };
}