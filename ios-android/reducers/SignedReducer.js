import { TOGGLE } from './actions/Signed';

const signedReducer = (state = true, action) => 
{
    switch (action.type)
    {
        case TOGGLE:
            return !state;
        default:
            return state;
    }
}

export default signedReducer;