import { ethers } from 'ethers';
//import RNSimpleCrypto from 'react-native-simple-crypto';


export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';


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
        // let mnemonic = ethers.utils.HDNode.entropyToMnemonic(ethers.utils.randomBytes(32));
        // let wallet = new ethers.Wallet.fromMnemonic(mnemonic);
        //const rsaKeys = await RNSimpleCrypto.RSA.generateKeys(1024);
        // console.log("RSA1024 private key", rsaKeys.private);
        // console.log("RSA1024 public key", rsaKeys.public);
    };
}